/**
 * This is a Next.js page component that renders the InspirationPage container
 * inside a MainLayout component and includes NextSeo for SEO optimization.
 * @returns The `Inspiration` component is being returned, which includes the
 * `NextSeo` component for SEO optimization and the `MainLayout` component that
 * wraps the `InspirationPage` component.
 */

/*   tow line bellow is required to ftch data 
from json file remove itf data fetched from API    */
import fs from 'fs'
import path from 'path'

import MainLayout from '../../layouts/mainLayout/MainLayout'
import InspirationPage from '../../containers/inspirationPage/InspirationPage'
import { NextSeo } from 'next-seo'

const Inspiration = ({ inspirationData }) => {
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
        <InspirationPage inspirationData={inspirationData} />
      </MainLayout>
    </>
  )
}

export default Inspiration

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

  return {
    props: {
      inspirationData: inspirationData.data.products,
    },
  }
}
