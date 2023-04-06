import Image from 'next/image'

import Head from '../../layouts/head/Head'
import MainLayout from '../../layouts/mainLayout/MainLayout'
import InspirationPage from '../../containers/inspirationPage/InspirationPage'

const Inspiration = () => {
  return (
    <>
      <Head
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
