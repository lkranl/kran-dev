import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAdsense from "./GoogleAdsense";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kran's Website",
  description: "This is the base for the personal website of kran",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <GoogleAdsense pId="3460906822050782" />
    </html>
  );
}
