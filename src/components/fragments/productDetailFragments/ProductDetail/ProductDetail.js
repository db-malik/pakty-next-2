import React from 'react'
import CardProductDetail from '../../../cards/cardProductDetail/CardProductDetail'
import TogleShowContent from '../../../molucules/togleShowContent/TogleShowContent'
import OtherProducts from '../otherProducts/OtherProducts'

import classes from './ProductDetail.module.scss'

import { allProductData } from '/data/ProductsData'
// mock  products

const ProductDetail = ({ product }) => {
  console.log(product)

  return (
    <div className={classes.container}>
      <CardProductDetail product={product} />
      <TogleShowContent arrayLinks={['description', 'information']} product={product} />
    </div>
  )
}

export default ProductDetail
