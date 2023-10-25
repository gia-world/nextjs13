"use client";

import React, { useEffect, useState } from "react";

// client component는 async 쓰지 않음
export default function MeowArticle() {
  const [text, setText] = useState("loading...");
  useEffect(() => {
    fetch("https://meowfacts.herokuapp.com")
      .then((res) => res.json())
      .then((data) => setText(data.data[0]));
  }, []);
  return <article>{text}</article>;
}
