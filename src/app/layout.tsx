import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOSProvider from "@/components/AOSProvider";

// export const metadata: Metadata = {
//   title: "KClub",
//   description: "At KClub, we believe every challenge holds an opportunity.",
// };

export const metadata: Metadata = {
  title: "KClub",
  description: "At KClub, we believe every challenge holds an opportunity.",
  openGraph: {
    title: "KClub",
    description: "At KClub, we believe every challenge holds an opportunity.",
    url: "https://kclub-website.netlify.app", // Update to your actual URL
    siteName: "KClub",
    images: [
      {
        url: "https://kclub-website.netlify.app/logo.svg", // Make sure logo.png is in /public
        width: 1200,
        height: 630,
        alt: "KClub Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KClub",
    description: "At KClub, we believe every challenge holds an opportunity.",
    images: ["https://kclub-website.netlify.app/logo.svg"], // Same image for Twitter
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AOSProvider /> {/* 👈 this initializes AOS on the client */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
