/*
   this card represente the galery of 6 product in collection section  design contain :
   - 6 images
*/

import Image from 'next/image'
import Link from 'next/link'
import classes from './CardGalery.module.css'

import CardItemCollection from '../cardItemCollection/CardItemCollection'

const CardGalery = ({ sixProducts }) => {
  return (
    <div className={classes.container}>
      {sixProducts.map((product, index) => (
        <div className={`${classes[`div${index + 1}`]} ${classes.images}`}>
          <CardItemCollection
            linkTo={`inspiration/detail/${product._id}`}
            imageSrc={product.image}
            islikeable={false}
          />
        </div>
      ))}
    </div>
  )
}

export default CardGalery
