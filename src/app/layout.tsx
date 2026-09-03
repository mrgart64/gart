import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "@/styles/stars.scss";

// Konfigurasi JetBrains Mono
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Bisa pilih dari 100 sampai 800
});

export const metadata: Metadata = {
  title: "BASIS-64 Business",
  description: "Kami menyediakan jasa pembuatan website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      {/* Terapkan className langsung ke body */}
      <body className={`${jetbrainsMono.className} antialiased`}>
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        {children}
      </body>
    </html>
  );
}