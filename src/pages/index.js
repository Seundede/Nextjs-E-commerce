import Head from "next/head";
import Bannner from "../components/Banner";
import Header from "../components/Header";
import Products from "../components/Products";

export default function Home({data}) {
  return (
    <div>
      <Head>
        <title>Amazon</title>
      </Head>
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        <Bannner />
        <Products data={data} />
      </main>
    </div>
  );
}
export async function getServerSideProps(context) {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}