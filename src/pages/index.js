import Head from "next/head";
import Bannner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Products from "../components/Products";

export default function Home({data}) {
  return (
    <div>
      <Head>
        <title>E-commerce</title>
      </Head>
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        <Bannner />
        <Products data={data} />
        <Footer />
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