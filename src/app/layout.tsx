import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kosh Studios | Architecture & Interior Design",
  description:
    "Bespoke architecture, interior design, and turnkey spatial execution. Creating spaces of timeless permanence and quiet luxury.",
  keywords: [
    "Architecture",
    "Interior Design",
    "Luxury Residential",
    "Commercial Architecture",
    "Turnkey Fitout",
    "Kosh Studios",
  ],
  openGraph: {
    title: "Kosh Studios | Architecture & Interior Design",
    description:
      "Bespoke architecture, interior design, and turnkey spatial execution.",
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
      className={`${playfair.variable} ${plusJakarta.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#18181B] antialiased selection:bg-[#A3704C] selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
