/*
   this card represente card of products in our shop section design contain :
   - promotion and like (if showed = true)
   - image
   - title
   - description (if showed = true)
   - price
   - shop Button  (if showed = true)
*/

import { Button, Col, Row } from 'antd'
import Image from 'next/image'
import FeatherIcon from 'feather-icons-react/build/FeatherIcon'
import React from 'react'
import LikeButton from '../../buttons/likeButton/LikeButton'
import classes from './ItemCard.module.css'
import PromotionStatus from '../../molucules/promtionStatus/PromotionStatus'
import { ShopButton } from '../../buttons/shopButton/ShopButton'
import Link from 'next/link'

const ItemCard = ({
  src,
  title,
  price,
  Promoted,
  isLikeable,
  showShop,
  linkTo,
}) => {
  
  return (
    <Link href={linkTo ? linkTo : '#'}>
      <div className={classes.cardContainer}>
        <div className={classes.PromotionStatusContainer}>
          {Promoted && <PromotionStatus promotion={Promoted} />}
        </div>
        <div className={classes.likeButtonContainer}>
          {isLikeable && <LikeButton />}
        </div>
        <div className={classes.imageContainer}>
   
          <img
            src= {src}
            width={100}
            height={100}
      
            alt="image"
            
          />
        </div>
       {title && <div className={classes.title}> {title} </div>}
        { price &&  <div className={classes.price}> {price} DT </div>}
        <div className={classes.shopBtnContiner}>
          {showShop && <ShopButton />}
        </div>
      </div>
    </Link>
  )
}

export default ItemCard
