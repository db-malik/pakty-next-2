import { NextSeo } from 'next-seo'
import React, { useEffect } from 'react'
import OurStore from '../../containers/ourStorePage/OurStore'
import MainLayout from '../../layouts/mainLayout/MainLayout'
import getTokenFromRequest from '@/utils/requests/getToken'
import getFromAPI from '@/utils/requests/getFromApi'
import getAllCategories from '@/utils/requests/getCategories'

const Store = ({ products, categories }) => {
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
        <OurStore products={products} categories={categories} />
      </MainLayout>
    </>
  )
}

export default Store

export async function getServerSideProps(context) {
  const categories = await getAllCategories('productcategories')
  const data = await getFromAPI('getProducts')
  const products = data.data

  return {
    props: {
      categories: categories.data,
      products: products,
    },
  }
}
