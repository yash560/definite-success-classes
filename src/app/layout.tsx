import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCallBar from "@/components/layout/FloatingCallBar";

export const metadata: Metadata = {
  title: "Definite Success Classes Bhopal | IIT-JEE, NEET & Pre-Foundation Institute",
  description: "Definite Success Classes (Estd. 2002) is Bhopal's leading coaching institute for IIT-JEE (Main & Adv), NEET-UG & Pre-Foundation. Located at Kasturba Nagar near Chetak Bridge. Up to 100% DSSET Scholarship.",
  keywords: [
    "Definite Success Classes Bhopal",
    "DSC Bhopal",
    "IIT JEE Coaching Bhopal",
    "NEET Coaching Bhopal",
    "Kasturba Nagar Coaching Chetak Bridge",
    "DSSET Scholarship Test Bhopal",
    "Best NEET Faculty Bhopal",
  ],
  openGraph: {
    title: "Definite Success Classes (DSC) Bhopal | Estd. 2002",
    description: "Central India's leading coaching institute for IIT-JEE and NEET-UG with 4.9★ rating.",
    url: "https://definitesuccess.in",
    siteName: "Definite Success Classes Bhopal",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
        <Navbar />
        <main className="flex-grow pb-16 sm:pb-0">
          {children}
        </main>
        <Footer />
        <FloatingCallBar />
      </body>
    </html>
  );
}
