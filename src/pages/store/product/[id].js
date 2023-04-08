import Head from 'next/head'
import { useRouter } from 'next/router'
import ProductDetailPage from '../../../containers/productDetailPage/ProductDetailPage'
import MainLayout from '../../../layouts/mainLayout/MainLayout'

const Product = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <>
      <Head
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
