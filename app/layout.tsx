import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "CodesBlue",
  description:
    "CodesBlue specializes in custom web & app development. We craft high-performance, conversion-focused websites and mobile apps using React, Next.js, React Native, & Figma design. Elevate your brand with our tailored full-stack solutions.",
  keywords: [
    "custom web development",
    "mobile app development company",
    "React development services",
    "Next.js agency",
    "React Native development",
    "Figma UI/UX design",
    "full-stack development company",
    "conversion optimization services",
    "e-commerce web solutions",
    "SEO-friendly web design",
    "performance web apps",
    "CodesBlue",
  ],
  metadataBase: new URL("https://www.codesblue.com"),
  openGraph: {
    title:
      "CodesBlue: High-Performance Custom Web & Mobile Apps for Businesses",
    description:
      "Unlock growth with CodesBlue. We deliver modern, responsive, and performance-driven web and mobile app solutions, meticulously tailored to your unique business needs for maximum impact.",
    url: "https://www.codesblue.com",
    siteName: "CodesBlue",
    images: [
      {
        url: "./logo.svg",
        width: 1200,
        height: 630,
        alt: "CodesBlue project preview - Custom Web & Mobile App Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "CodesBlue: Expert Web & App Development | React, Next.js, Full-Stack",
    description:
      "CodesBlue: Your trusted partner for React, Next.js, React Native, Figma UI/UX, and robust full-stack & e-commerce solutions. Transform your digital presence today!",
    images: ["./logo.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={archivo.variable}>
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className="antialiased bg-white text-black">{children}</body>
    </html>
  );
}
