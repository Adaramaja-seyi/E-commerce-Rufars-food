import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rufars Foods - Premium Dried Fruits & Superfoods",
  description:
    "Discover premium dried fruits, nuts, seeds, and superfoods from Rufars Foods. Natural, healthy, and delicious.",
  keywords: "dried fruits, superfoods, healthy snacks, nuts, seeds, organic",
  openGraph: {
    title: "Rufars Foods - Premium Dried Fruits & Superfoods",
    description:
      "Discover premium dried fruits, nuts, seeds, and superfoods from Rufars Foods.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
