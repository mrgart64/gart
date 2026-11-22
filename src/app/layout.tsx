import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "@/styles/stars.scss";

// Konfigurasi JetBrains Mono
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "GART-64 - Hall of Fame",
  description: "Website hall of fame atau portofolio si Gabriel",
  icons: {
    icon: "/favicon.ico",
  },
  // --- KONFIGURASI THUMBNAIL (Open Graph & Twitter) ---
  openGraph: {
    title: "GART-64 - Hall of Fame",
    description: "Website hall of fame atau portofolio si Gabriel",
    url: "https://gart.basis64.com", // Ganti dengan URL Cloudflare Pages kamu
    siteName: "GART-64",
    images: [
      {
        url: "/og-image.jpg", // Path ke file thumbnail di folder public/
        width: 1200,
        height: 630,
        alt: "Gart-64 Hall of Fame Preview",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image", // Menampilkan thumbnail ukuran besar di Twitter/X
    title: "GART-64 - Hall of Fame",
    description: "Website hall of fame atau portofolio si Gabriel",
    images: ["https://gart.basis64.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${jetbrainsMono.className} antialiased`}>
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        {children}
      </body>
    </html>
  );
}