import Image from "next/image";
import Script from "next/script"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Script src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3460906822050782" strategy="lazyOnload" />
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h2>Base website for Kran</h2>
      </div>
    </main>
  );
}
