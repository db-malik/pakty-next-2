import React from 'react'
import ItemCard from '../../../cards/ItemCard/ItemCard'
import classes from './ProductsPage.module.css'
import getUrl from '@/utils/getUrl/GetUrl'
const ProductsPage = ({ items, products }) => {
  return (
    <div className={classes.container}>
      {items.map((item) => (
        <div className={classes.cartContainer}>
          <ItemCard
            src={item.images[0] ? getUrl(item.images[0]) : '/assets/img/No-Image.png'}
            title={item.entitled}
            description=""
            price={item.price}
            Promoted={item.promoted}
            isLikeable={true}
            showShop={true}
            linkTo={`/store/product/${item._id}`}
            key={item._id}
            _id={item._id}
          />
        </div>
      ))}
    </div>
  )
}
export default ProductsPage
