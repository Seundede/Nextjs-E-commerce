import { useRouter } from "next/router";
import React from "react";
import Header from "../components/Header";

const success = () => {
     const router = useRouter();
  return (
    <>
      <Header />
      <div className="m-5">
        <h1>Thank you for your order</h1>
        <button className="button" onClick={() => router.push('/')}>Go back to home</button>
      </div>
    </>
  );
};

export default success;
