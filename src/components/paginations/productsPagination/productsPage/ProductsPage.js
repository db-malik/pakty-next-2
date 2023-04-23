import React from 'react'
import ItemCard from '../../../cards/ItemCard/ItemCard'
import classes from './ProductsPage.module.css'
const ProductsPage = ({ items }) => {
  const item = items[0]
  return (
    <div className={classes.container}>
      {items.map((item) => (
        <ItemCard
          src="/assets/img/chaise.png"
          title={item.entitled}
          description=""
          price={item.price}
          Promoted={item.promoted}
          isLikeable={true}
          showShop={true}
          linkTo={`/store/product/${item._id}`}
          key={item._id}
        />
      ))}
    </div>
  )
}
export default ProductsPage
