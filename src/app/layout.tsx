import "./globals.css";
import type { Metadata } from "next";

import styles from "./layout.module.css";
import Link from "next/link";

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
    <html lang="en">
      <body>
        <header className={styles.header}>
          <h1>Demo note App</h1>
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
