import NotFoundPage from "@/app/not-found";
import GoProductsButton from "@/components/GoProductsButton";
import { getProduct } from "@/service/products";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";
import { getProducts } from "../../../service/products";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 3;
export function generateMetadata({ params }: Props) {
  return {
    title: `name : ${params.slug}`,
  };
}

// 서버 파일에 있는 데이터 중 해당 제품의 정보를 찾아 보여줌
export default async function ProductPage({ params: { slug } }: Props) {
  const product = await getProduct(slug);
  if (!product) {
    redirect("/products");
    // NotFoundPage();
  } else {
    return (
      <div>
        <p>{product.name} Page</p>
        <Image
          src={`/images/${product.image}`}
          alt={product.name}
          width={300}
          height={300}
        />
        {/* 서버 컴포넌트에서는 온클릭을 사용할 수 없음 */}
        <GoProductsButton />
      </div>
    );
  }
}

// 다이나믹 라우팅에서 페이지 미리 생성해두고 싶을 때
export async function generateStaticParams() {
  // 모든 제품의 페이지를 미리 만들어 둘 수 있게 (SSG)
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.id,
  }));
}
