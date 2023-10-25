import Link from "next/link";
import React from "react";
import { getProducts } from "../../service/products";

export const revalidate = 3;

export default async function ProductsPage() {
  //DB에 있는 제품의 리스트를 읽어와서 보여줌
  const products = await getProducts();
  return (
    <div>
      <h1>product details</h1>

      <ul className="flex gap-4 mb-2 text-[brown]">
        {products.map(({ id, name }, i) => (
          <li key={`product-${i}`}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
