import { NextSeo } from 'next-seo'
import Head from 'next/head'
import React from 'react'
import InspirationDetailPage from '../../../containers/InspirationDetailpage/InspirationDetailPage'

import MainLayout from '../../../layouts/mainLayout/MainLayout'

const InspirationDetail = () => {
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
        <InspirationDetailPage />
      </MainLayout>
    </>
  )
}

export default InspirationDetail
