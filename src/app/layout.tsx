import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KDT Tiling Swansea | Premium Wall & Floor Tiling",
  description: "Professional tiling services across South Wales. All aspects of wall and floor tiling, plumbing, and wetrooms. Fully guaranteed and insured.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-matte-black text-white selection:bg-electric-cyan selection:text-black antialiased">
        {children}
      </body>
    </html>
  );
}
