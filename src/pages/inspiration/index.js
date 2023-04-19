/**
 * This is a Next.js page component that renders the InspirationPage container
 * inside a MainLayout component and includes NextSeo for SEO optimization.
 * @returns The `Inspiration` component is being returned, which includes the
 * `NextSeo` component for SEO optimization and the `MainLayout` component that
 * wraps the `InspirationPage` component.
 */
import Head from '../../layouts/head/Head'
import MainLayout from '../../layouts/mainLayout/MainLayout'
import InspirationPage from '../../containers/inspirationPage/InspirationPage'
import { NextSeo } from 'next-seo'

const Inspiration = () => {
  return (
    <>
      <NextSeo
        title="Pakty | Inspiration"
        description="Pakty your space in 3D"
        author=""
        keywords="Visualize 3D furnitures in your project before shopping"
        image=""
      />
      <MainLayout>
        <InspirationPage />
      </MainLayout>
    </>
  )
}

export default Inspiration
