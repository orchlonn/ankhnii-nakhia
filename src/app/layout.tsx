import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Анхны Нахиа | Эм импортлогч компани",
  description:
    "Анхны Нахиа ХХК - 2005 оноос хойш олон улсын стандартын эм, эмнэлгийн хэрэгслийг Монгол Улсад импортлон нийлүүлж буй найдвартай компани. Улаанбаатар хот.",
  keywords: [
    "эм импорт",
    "Монгол",
    "фарм компани",
    "эмнэлгийн хэрэгсэл",
    "Улаанбаатар",
    "Анхны Нахиа",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mn">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
