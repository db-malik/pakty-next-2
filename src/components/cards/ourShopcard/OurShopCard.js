/*
   this card represente card of products in our shop section design contain :
   - image
   - title
   - description
   - price

*/

import Image from 'next/image'
import React from 'react'
import classes from './OurShopCard.module.css'
import { ShopButton } from '../../buttons/shopButton/ShopButton'
import Link from 'next/link'

const OurShopCard = ({ src, title, description, price, linkTo }) => {
  return (
    <Link href={linkTo ? linkTo : '#'}>
      <div className={classes.cardContainer}>
        <div className={classes.imageContainer}>
          <Image src={src} fill alt="image" priority />
        </div>
        <div className={classes.detail}>
          <div className={classes.title}> {title} </div>
          <div className={classes.description}> {description} </div>
          <div className={classes.price}>
            {' '}
            {price && <span>DT</span>} {price}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default OurShopCard
