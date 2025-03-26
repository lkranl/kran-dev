import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const fira_code = Fira_Code({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Kran's Website",
  description: "This is the base for the personal website of kran",
  manifest: '/public/site.webmanifest',
  icons: {
    icon: '/public/favicon-32x32.png',
    apple: '/public/apple-touch-icon.png',
    shortcut: '/public/android-chrome-192x192.png'
  },
  other: {
    "google-adsense-account": "ca-pub-3460906822050782",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={fira_code.style}>{children}</body>
    </html>
  );
}
