import { Metadata } from "next";
import os from "os";
import { useState } from "react";
import Counter from "../components/Counter";
import Image from "next/image";

// either Static metadata
export const metadata: Metadata = {
  title: "note app",
};

export default function Home() {
  console.log("서버 출력");
  console.log(os.hostname());

  // const [first, setFirst] = useState();
  return (
    <>
      <h1>홈페이지</h1>
      <Counter />
      <Image
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
        alt="shop"
        width={400}
        height={400}
      />
    </>
  );
}
