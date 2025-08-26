import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOSProvider from "@/components/AOSProvider";

export const metadata: Metadata = {
  title: "KClub",
  description: "KClub website built with Next.js + Tailwind CSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AOSProvider />  {/* 👈 this initializes AOS on the client */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
