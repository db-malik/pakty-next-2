import Head from 'next/head'
import React from 'react'
import CardProductDetail from '../../components/cards/cardProductDetail/CardProductDetail'
import ProductDetail from '../../components/fragments/productDetailFragments/ProductDetail/ProductDetail'
import MainLayout from '../../layouts/mainLayout/MainLayout'
import classes from './ProductDetailPage.module.css'

import { allProductData } from '/data/ProductsData'
import { productDetail } from '/data/oneProductDetail'
import OtherProducts from '../../components/fragments/productDetailFragments/otherProducts/OtherProducts'

function ProductDetailPage({ product }) {
  console.log(product)
  return (
    <div className={`${classes.container} lineairBackground`}>
      <ProductDetail product={product} />
      <OtherProducts products={allProductData.slice(0, 4)} />
    </div>
  )
}

export default ProductDetailPage
