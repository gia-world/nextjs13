import "./globals.css";
import type { Metadata } from "next";

import styles from "./layout.module.css";
import Link from "next/link";
import { Nanum_Gothic, Open_Sans } from "next/font/google";

const fontNG = Nanum_Gothic({
  weight: "700",
  subsets: ["latin"],
});
const fontSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "hey",
  description: "hi",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontNG.className}>
      <body>
        <header className={styles.header}>
          <h1 className={fontSans.className}>Demo note App</h1>
          <nav className={styles.nav}>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About</Link>
            <Link href="/products">Products</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
