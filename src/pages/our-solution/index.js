import { NextSeo } from 'next-seo'
import React from 'react'
import OurSolutionPage from '../../containers/ourSolutionPage/OurSolutionPage'
import Head from '../../layouts/head/Head'
import MainLayout from '../../layouts/mainLayout/MainLayout'

import classes from './style.module.css'
const solution = () => {
  return (
    <>
      <NextSeo
        title="Pakty | Our Solution"
        description="Pakty your space in 3D"
        author=""
        keywords="Visualize 3D furnitures in your project before shopping"
        image=""
      />
      <MainLayout>
        <div className={classes.container}>
          <OurSolutionPage />
        </div>
      </MainLayout>
    </>
  )
}

export default solution
