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
  title: "Анхны Нахиа | Эмийн сан & Эм ханган нийлүүлэгч",
  description:
    "Анхны Нахиа ХХК - 2007 оноос эм, гадаад худалдааны чиглэлээр үйл ажиллагаа явуулж буй компани. 6 салбар эмийн сан, эм ханган нийлүүлэх үйлчилгээтэй. Улаанбаатар хот.",
  keywords: [
    "эмийн сан",
    "эм ханган нийлүүлэх",
    "Монгол",
    "Анхны Нахиа",
    "эмнэлгийн хэрэгсэл",
    "Улаанбаатар",
    "фарм компани",
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
