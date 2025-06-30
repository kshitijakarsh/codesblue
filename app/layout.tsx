import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

// Use Archivo instead of DM_Sans
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "CodesBlue",
  description: "CodesBlue is a digital marketing agency that helps businesses grow their online presence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={archivo.variable}>
      <body className="antialiased bg-[#1F2B68]">{children}</body>
    </html>
  );
}
