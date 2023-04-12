import React from 'react'
import ItemCard from '../../../cards/ItemCard/ItemCard'
import ExploreAllBar from '../../../molucules/exploreAllBar/ExploreAllBar'
import classes from './OtherProducts.module.css'

const OtherProducts = ({ products }) => {
  return (
    <div className={classes.container}>
      <ExploreAllBar label="Also you may like " linkTo={'/store'} />

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
