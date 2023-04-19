import React from 'react'
import classes from './Products.module.css'
const ProductsFragments = ({ items }) => {
  return (
    <div className={classes.container}>
      {items.map((item) => (
        <ItemCard
          className={classes.card}
          src="/assets/img/chair2.png"
          title={item.entitled}
          description=""
          price={item.price}
          Promoted={false}
          isLikeable={true}
          showShop={true}
          linkTo={`/store/product/${item._id}`}
          key={item._id}
        />
      ))}
    </div>
  )
}

export default ProductsFragments
