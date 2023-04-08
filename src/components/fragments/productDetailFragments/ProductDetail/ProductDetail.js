import React from 'react'
import CardProductDetail from '../../../cards/cardProductDetail/CardProductDetail'
import TogleShowContent from '../../../molucules/togleShowContent/TogleShowContent'
import OtherProducts from '../otherProducts/OtherProducts'

import { allProductData } from '/data/ProductsData'
// mock  products

const ProductDetail = ({ product }) => {
  const content = {
    description: product.description,
    information: product.materials,
  }

  return (
    <div>
      <CardProductDetail />
      <TogleShowContent
        arrayLinks={['description', 'information']}
        content={content}
      />
      <OtherProducts products={allProductData.slice(0, 4)} />
    </div>
  )
}

export default ProductDetail
