import type { Metadata } from "next";
import {Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";


const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "jackson clark",
  description: "portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} antialiased min-h-screen font-mono`}
      >
        <div className="max-w-xl px-6 py-4 mx-auto sm:py-6 md:py-8">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
