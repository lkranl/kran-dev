import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kran's Contact",
  description: "This is the base for the personal website of kran",
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
    shortcut: '/android-chrome-192x192.png'
  },
  other: {
    "google-adsense-account": "ca-pub-3460906822050782",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>{children}</section>
  );
}
