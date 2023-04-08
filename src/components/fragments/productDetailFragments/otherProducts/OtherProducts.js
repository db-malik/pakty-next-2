import React from 'react'
import ItemCard from '../../../cards/ItemCard/ItemCard'
import classes from './OtherProducts.module.css'

const OtherProducts = ({ products }) => {
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <span>You my also like</span>
        <span>EXPLORE ALL </span>
      </div>

      <div className={classes.productsContainer}>
        {products.map((product) => (
          <ItemCard
            src={product.image}
            title={product.entitled}
            description=""
            price={product.price}
            Promoted={false}
            isLikeable={true}
            showShop={true}
            linkTo={product._id}
          />
        ))}
      </div>
    </div>
  )
}

export default OtherProducts
