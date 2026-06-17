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
  title: {
    default: "LucasDev — Flutter & Full-Stack Developer",
    template: "%s — LucasDev",
  },
  description:
    "Portfolio of LucasDev — Flutter & Full-Stack Developer building mobile, web, and desktop apps with clean architecture and great UX. Based in Thailand.",
  keywords: [
    "Flutter Developer",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "Mobile Apps",
    "Portfolio",
  ],
  openGraph: {
    title: "LucasDev — Flutter & Full-Stack Developer",
    description:
      "Building mobile, web, and desktop apps with clean architecture and great UX.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
