import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "hey - product",
  description: "hi",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <nav className="flex flex-col gap-4 p-4 border-[grey] border-r">
        <Link href="/products/women">여성</Link>
        <Link href="/products/man">남성</Link>
      </nav>
      <section className="p-4">{children}</section>
    </div>
  );
}
