/*   tow line bellow is required to ftch data 
from json file remove itf data fetched from API    */
import fs from 'fs'
import path from 'path'

import { NextSeo } from 'next-seo'
import Head from 'next/head'
import React from 'react'
import InspirationDetailPage from '../../../containers/InspirationDetailpage/InspirationDetailPage'

import MainLayout from '../../../layouts/mainLayout/MainLayout'

const InspirationDetail = ({ selectedProduct }) => {
  return (
    <>
      <NextSeo
        title="Pakty | Inspiration Detail"
        description="Pakty your space in 3D"
        author=""
        keywords="Visualize 3D furnitures in your project before shopping"
        image=""
      />
      <MainLayout>
        <InspirationDetailPage selectedProduct={selectedProduct} />
      </MainLayout>
    </>
  )
}

export default InspirationDetail

export async function getServerSideProps(context) {
  /* this is for fetch data from file inspiration.json 
  its justto moch data commented and uncomment
   bloc bellow to fetch data fron API 
  */
  const filePath = path.join(process.cwd(), 'data', 'inspiration.json')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const inspirationData = JSON.parse(fileContents)

  /* uncomment this to fetch data from API */
  // const res = await fetch('http://pm.basketofart.net:3000/inspiration')
  // const inspirationData = await res.json()
  // const inspirations = inspirationData.data
  const _idProduct = context.query._id
  const selectedProduct = inspirationData.data.products.filter((item) => item.product._id === _idProduct)

  return {
    props: {
      selectedProduct: selectedProduct[0].product,
    },
  }
}
