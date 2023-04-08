import Head from 'next/head'
import React from 'react'
import CardProductDetail from '../../components/cards/cardProductDetail/CardProductDetail'
import ProductDetail from '../../components/fragments/productDetailFragments/ProductDetail/ProductDetail'
import MainLayout from '../../layouts/mainLayout/MainLayout'
import classes from './ProductDetailPage.module.css'

import { allProductData } from '/data/ProductsData'
import { productDetail } from '/data/oneProductDetail'

function ProductDetailPage({ productId }) {
  return (
    <div className={classes.container}>
      <ProductDetail product={productDetail} />

      {/* <OtherProduct /> */}
    </div>
  )
}

export default ProductDetailPage
