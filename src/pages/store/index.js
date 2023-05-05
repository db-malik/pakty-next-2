import { NextSeo } from 'next-seo'
import Head from 'next/head'
import React from 'react'
import OurStore from '../../containers/ourStorePage/OurStore'
import MainLayout from '../../layouts/mainLayout/MainLayout'
import Image from "next/image"

const Store = ({products}) => {
console.log(products);
  return (
    <>
      <NextSeo
        title="Pakty | Store"
        description="Discover our store and explore more about 3D furniture."
        author=""
        keywords="Visualize 3D furnitures in your project before shopping"
        image=""
      />
      <MainLayout>
        <OurStore products={products} />
      </MainLayout>
    </>
  )
}

export default Store



export async function getServerSideProps(context) {
  const res = await fetch('http://pm.basketofart.net:3000/getProducts');
  const data = await res.json();
  const  products = data.data
  return {
    props: {
      products: products
    }
  };
}