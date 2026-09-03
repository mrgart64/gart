/*
 * Cloudflare adapter v0.1.1 by BASIS-64
 * This adapter cloud make local and production development more easier
 *
 * NOTICE: REQUIRED LIBRARIES
 * - @cloudflare/next-on-pages
 * - @cloudflare/workers-types
 * - mysql2/promise
 */

import { getRequestContext } from "@cloudflare/next-on-pages";
import { D1Database } from "@cloudflare/workers-types";
import mysql from "mysql2/promise";

export default class CloudAdapter {
	/**
	 * Executes SQL on Cloudflare D1 in production/preview,
	 * falling back to local SQLite in development.
	 *
	 * @param command SQL query string (e.g., "SELECT * FROM users WHERE id = ?")
	 * @param params Optional array of parameters for SQL injection protection
	 */
	static async D1<T = unknown>(
		query: string,
		params: unknown[] = [],
	): Promise<T[]> {
		try {
			// Get Cloudflare D1 DB context

			const ctx = getRequestContext();
			const env = ctx?.env as { DB?: D1Database };

			// Fetching data to Cloudflare D1
			if (env?.DB) {
				const stmt = env.DB.prepare(query);
				const boundStmt =
					params.length > 0 ? stmt.bind(...params) : stmt;
				const { results } = await boundStmt.all<T>();
				return results;
			}
		} catch (err) {
			// Fallback to basic sqlite
			const res = await fetch(
				"http://localhost:3000/api/cloudadapter/d1",
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ query, params }),
					cache: "no-store",
				},
			);

			if (!res.ok) return [];
			return res.json();
		}
	}
}
