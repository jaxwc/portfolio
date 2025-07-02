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
        <div className="max-w-4xl px-4 py-8 mx-auto">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
