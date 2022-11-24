import Head from "next/head";
import Header from "../Components/Header";
import Image from "next/Image";
import Banner from "../Components/Banner";
import ProductFeed from "../Components/ProductFeed";
import Product from "../Components/Product";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Market Place</title>
      </Head>
      <h1>Hello Market Place</h1>
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        {/* <Banner/> */}
        <Banner />

        {/* <Product Feed/> */}

        <ProductFeed products={products} />
        <Product/>

      </main>
    </div>
  );
}
export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
  // .then((json) => console.log(json));
  return {
    props: {
      products,
    },
  };
}
