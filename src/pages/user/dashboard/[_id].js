import fs from 'fs'
import path from 'path'

import { NextSeo } from 'next-seo'
import React from 'react'
import UserDashboard from '../../../containers/user/userDashboard/UserDashboard'
import UserLayout from '../../../layouts/userLayout/UserLayout'
import { useEffect, useState } from 'react'
import getAllCategories from '@/utils/requests/getCategories'
import getFromAPI from '@/utils/requests/getFromApi'
const Store = ({ products, inspirationData, categories }) => {
  // mock data user
  const user = { name: 'Sarah Mezrani', image: '/assets/img/user.png' }

  return (
    <>
      <NextSeo
        title="Pakty | User Dashboard"
        description="Discover our store and explore more about 3D furniture."
        author=""
        keywords="Visualize 3D furnitures in your project before shopping"
        image=""
      />
      <UserLayout user={user}>
        
        <UserDashboard products={products} inspirationData={inspirationData} categories={categories} />
      </UserLayout>
    </>
  )
}

export default Store

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

  const categories = await getAllCategories('productcategories')
  const data = await getFromAPI('getProducts')
  const products = data.data
  return {
    props: {
      inspirationData: inspirationData.data.products,
      products: products,
      categories: categories.data,
    },
  }
}
