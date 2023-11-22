import React from "react";
import Board from "../components/GPT4Board";
import Link from "next/link";

const IndexPage = () => {
  return (
    <div>
      <h1>Hex Game Board</h1>
      <Link href="/square-board">Go to Square Board</Link>
      <Board />
    </div>
  );
};

export default IndexPage;
