import { Metadata } from "next";
import os from "os";
import { useState } from "react";
import Counter from "../components/Counter";

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
    </>
  );
}
