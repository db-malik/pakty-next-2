import { useRouter } from 'next/router'
import ProductDetailPage from '../../../containers/productDetailPage/ProductDetailPage'

const DynamicProductDetail = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <div>
      <ProductDetailPage productId={id} />
    </div>
  )
}

export default DynamicProductDetail
