import React from "react";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <nav className="flex flex-col gap-4 p-4 border-[grey] border-r">
        <a href="">여성</a>
        <a href="">남성</a>
      </nav>
      <section className="p-4">{children}</section>
    </div>
  );
}
