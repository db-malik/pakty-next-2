import { NextSeo } from 'next-seo'
import React from 'react'
import BecomeProPage from '../../containers/becomeProPage/BecomeProPage'
import MainLayout from '../../layouts/mainLayout/MainLayout'

const index = () => {
  return (
    <>
      <NextSeo
        title="Pakty | Become Pro"
        description="Become a professional"
        author=""
        keywords="If you have a project or products and you want to be professional , we can help you.
    Just send us your request ! "
        image=""
      />
      <MainLayout>
        <BecomeProPage />
      </MainLayout>
    </>
  )
}

export default index
