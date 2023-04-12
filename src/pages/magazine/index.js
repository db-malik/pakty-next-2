import { NextSeo } from 'next-seo'
import Head from 'next/head'
import MagazinePage from '../../containers/MagazinePage/MagazinePage'
import MainLayout from '../../layouts/mainLayout/MainLayout'

const Magazine = () => {
  return (
    <>
      <NextSeo
        title="Pakty | Magazine"
        description="Discover pakty’s magazine"
        author=""
        keywords="Visualize 3D furnitures in your project before shopping"
        image=""
      />
      <MainLayout>
        <MagazinePage />
      </MainLayout>
    </>
  )
}

export default Magazine
