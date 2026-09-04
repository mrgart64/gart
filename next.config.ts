/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	// Opsional: jika menggunakan Next Image, matikan optimasi gambar default
	images: {
		unoptimized: true
	}
};

export default nextConfig;
