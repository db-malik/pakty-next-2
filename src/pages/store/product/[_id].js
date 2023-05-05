import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import ProductDetailPage from '../../../containers/productDetailPage/ProductDetailPage'
import MainLayout from '../../../layouts/mainLayout/MainLayout'

const Product = ({ products }) => {
  const router = useRouter()
  const { _id } = router.query
  console.log(products)
  console.log(_id)
  const product = products.filter((item) => item._id === _id)

  console.log(product)
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
        <ProductDetailPage product={product} />
      </MainLayout>
    </>
  )
}

export default Product

export async function getServerSideProps(context) {
  const res = await fetch('http://pm.basketofart.net:3000/getProducts')
  const data = await res.json()
  const products = data.data
  return {
    props: {
      products: products,
    },
  }
}
