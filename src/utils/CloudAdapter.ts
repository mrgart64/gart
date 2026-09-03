// /*
//  * Cloudflare adapter v0.1.1 by BASIS-64
//  * This adapter cloud make local and production development more easier
//  *
//  * NOTICE: REQUIRED LIBRARIES
//  * - @cloudflare/next-on-pages
//  * - @cloudflare/workers-types
//  * - mysql2/promise
//  */

// import { D1Database } from "@cloudflare/workers-types";
// import mysql from "mysql2/promise";

// export default class CloudAdapter {
// 	/**
// 	 * Executes SQL on Cloudflare D1 in production/preview,
// 	 * falling back to local SQLite in development.
// 	 *
// 	 * @param command SQL query string (e.g., "SELECT * FROM users WHERE id = ?")
// 	 * @param params Optional array of parameters for SQL injection protection
// 	 */
// 	static async D1<T = unknown>(
// 		query: string,
// 		params: unknown[] = [],
// 	): Promise<T[]> {
// 		try {
// 			// Get Cloudflare D1 DB context

// 			const env = process.env;

// 			// Wajib validasi agar TypeScript tahu objek DB benar-benar ada
// 			if (!env.DB || typeof env.DB === "string") {
// 				throw new Error(
// 					"Database D1 tidak terikat atau salah konfigurasi.",
// 				);
// 			}

// 			// Fetching data to Cloudflare D1
// 			if (env?.DB) {
// 				const stmt = env.DB.prepare(query);
// 				const boundStmt =
// 					params.length > 0 ? stmt.bind(...params) : stmt;
// 				const { results } = await boundStmt.all<T>();
// 				return results;
// 			}
// 		} catch (err) {
// 			// Fallback to basic sqlite
// 			const res = await fetch(
// 				"http://localhost:3000/api/cloudadapter/d1",
// 				{
// 					method: "POST",
// 					headers: { "Content-Type": "application/json" },
// 					body: JSON.stringify({ query, params }),
// 					cache: "no-store",
// 				},
// 			);

// 			if (!res.ok) return [];
// 			return res.json();
// 		}
// 	}
// }

/*
 * Cloudflare adapter v0.2.0 by BASIS-64
 * Diperbarui untuk mendukung kompilasi OpenNext & Next.js 16
 */

export default class CloudAdapter {
	/**
	 * Mengeksekusi SQL di Cloudflare D1 saat produksi,
	 * otomatis menggunakan fallback localhost saat development.
	 */
	static async D1<T = unknown>(
		query: string,
		params: unknown[] = []
	): Promise<T[]> {
		// 1. Deteksi otomatis lingkungan server
		const isProduction =
			process.env.NODE_ENV === "production" ||
			process.env.CLOUDFLARE_ENV === "production";

		if (isProduction) {
			try {
				// Ambil langsung dari process.env dengan type casting paksa
				const db = (process.env as any).DB;

				if (!db || typeof db.prepare !== "function") {
					throw new Error(
						"Database D1 tidak terikat atau salah konfigurasi."
					);
				}

				const stmt = db.prepare(query);
				const boundStmt =
					params.length > 0 ? stmt.bind(...params) : stmt;
				const { results } = await boundStmt.all();
				return (results as T[]) || [];
			} catch (err: any) {
				console.error("D1 Production Error:", err.message);
				// JANGAN fetch localhost jika di cloud agar tidak eror 500
				return [];
			}
		} else {
			// 2. Logika khusus saat berjalan di komputer lokal (Development)
			try {
				const res = await fetch(
					"http://localhost:3000/api/cloudadapter/d1",
					{
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({ query, params }),
						cache: "no-store"
					}
				);

				if (!res.ok) return [];
				return await res.json();
			} catch (devErr) {
				console.error("Local Fallback Error:", devErr);
				return [];
			}
		}
	}
}
