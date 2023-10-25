"use client";
import React, { useState } from "react";

const Counter = () => {
  console.log("클라이언트 출력");
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((num) => num + 1)}>+</button>
    </div>
  );
};

export default Counter;
