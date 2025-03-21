import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "Animations",
  description: "A collection of animations created using framer-motion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <header className="fixed top-0 inset-x-0 z-50">
          <nav className="bg-black/10 backdrop-blur-md text-white h-16 flex items-center justify-between px-4">
            <Link href="/" className="font-bold bg-neutral-900 p-2 rounded-md">
              Back to All Animations
            </Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
