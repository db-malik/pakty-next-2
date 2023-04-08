import Head from 'next/head'
import React from 'react'
import OurStore from '../../containers/ourStorePage/OurStore'
import MainLayout from '../../layouts/mainLayout/MainLayout'

const Store = () => {
  return (
    <>
      <Head
        title="Pakty | Store"
        description="Discover our store and explore more about 3D furniture."
        author=""
        keywords="Visualize 3D furnitures in your project before shopping"
        image=""
      />
      <MainLayout>
        <OurStore />
      </MainLayout>
    </>
  )
}

export default Store
