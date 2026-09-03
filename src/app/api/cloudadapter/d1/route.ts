/*
 * Cloudflare adapter v0.1.1 by BASIS-64
 * This adapter cloud make local and production development more easier
 * This is the part of Cloudflare adapter
 * This endpoint could be use for simulating Cloudflare D1 in local environment
 *
 * NOTICE: REQUIRED LIBRARIES
 * - @cloudflare/next-on-pages
 * - @cloudflare/workers-types
 * - mysql2/promise
 */

import { NextResponse } from "next/server";
import Database from "better-sqlite3";
import path from "path";

interface RequestBody {
	query: string;
	params?: any[];
}

export async function POST(request: Request) {
	if (process.env.NODE_ENV !== "development") {
		return NextResponse.json({ error: "Forbidden" }, { status: 403 });
	}

	try {
		const { query, params }: RequestBody = await request.json();

		const dbPath = path.join(process.cwd(), "local.sqlite");
		const db = new Database(dbPath);

		const stmt = db.prepare(query);
		const trimmedQuery = query.trim().toUpperCase();

		let result;
		// Cek apakah query mengembalikan baris data (SELECT / PRAGMA)
		if (
			trimmedQuery.startsWith("SELECT") ||
			trimmedQuery.startsWith("PRAGMA")
		) {
			result = params?.length ? stmt.all(...params) : stmt.all();
		} else {
			// Untuk INSERT, UPDATE, DELETE, CREATE TABLE, dll.
			result = params?.length ? stmt.run(...params) : stmt.run();
		}

		db.close();
		return NextResponse.json(result);
	} catch (error: any) {
		console.error("[DEV-DB ROUTE ERROR]:", error);
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
