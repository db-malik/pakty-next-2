import fs from 'fs'
import path from 'path'

import { NextSeo } from 'next-seo'
import Image from 'next/image'
// import styles from '@/styles/Home.module.css'

import MainLayout from '../layouts/mainLayout/MainLayout'
import LandingPage from '../containers/landingPage/LandingPage'

export default function Home({ TOKEN_KEY, products, inspirationData }) {
  console.log(inspirationData)

  return (
    <>
      <NextSeo
        title="Pakty | Home"
        description="Pakty your space in 3D"
        author=""
        keywords="Visualize 3D furnitures in your project before shopping"
        image=""
      />
      <MainLayout>
        <LandingPage products={products} inspirationData={inspirationData} />
      </MainLayout>
    </>
  )
}

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

  const TOKEN_KEY = process.env.TOKEN_KEY

  const res = await fetch('http://pm.basketofart.net:3000/getProducts')
  const products = await res.json()

  return {
    props: {
      inspirationData: inspirationData.data.products,
      products: products.data,
      TOKEN_KEY,
    },
  }
}
