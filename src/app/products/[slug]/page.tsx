import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

export default function PantsPage({ params }: Props) {
  return <div>{params.slug} Page</div>;
}

// 다이나믹 라우팅에서 페이지 미리 생성해두고 싶을 때
export function generateStaticParams() {
  const products = ["pants", "skirts"];
  return products.map((product) => ({
    slug: product,
  }));
}
