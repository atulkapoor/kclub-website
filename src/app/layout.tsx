import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOSProvider from "@/components/AOSProvider";

export const metadata: Metadata = {
  title: "KClub",
  description: "At KClub, we believe every challenge holds an opportunity.",
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
