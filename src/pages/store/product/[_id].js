import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import ProductDetailPage from '../../../containers/productDetailPage/ProductDetailPage'
import MainLayout from '../../../layouts/mainLayout/MainLayout'

//lock product

const Product = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <>
      <NextSeo
        title="Pakty | Prodcut"
        description="Pakty your space in 3D"
        author=""
        keywords="Visualize 3D furnitures in your project before shopping"
        image=""
      />
      <MainLayout>
        <ProductDetailPage productId={id} />
      </MainLayout>
    </>
  )
}

export default Product
