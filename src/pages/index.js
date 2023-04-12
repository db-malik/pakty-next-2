import { NextSeo } from 'next-seo'
import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

import Head from '../layouts/head/Head'
import MainLayout from '../layouts/mainLayout/MainLayout'
import LandingPage from '../containers/landingPage/LandingPage'

export default function Home() {
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
        <LandingPage />
      </MainLayout>
    </>
  )
}
