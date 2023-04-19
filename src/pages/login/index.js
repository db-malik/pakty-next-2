import { NextSeo } from 'next-seo'
import Head from 'next/head'
import LoginPage from '../../containers/connexionsPakty/LoginPage'

const Magazine = () => {
  return (
    <>
      <NextSeo
        title="Pakty | login"
        description="Discover pakty’s magazine"
        author=""
        keywords="Visualize 3D furnitures in your project before shopping"
        image=""
      />

      <LoginPage />
    </>
  )
}

export default Magazine
