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

const ItemCard = (props) => {
  const {
    src,
    title,
    description,
    price,
    Promoted,
    isLikeable,
    showShop,
    linkTo,
  } = props
  return (
    <Link href={linkTo ? linkTo : '#'} className={classes.cardContainer}>
      <div className={classes.upperContent}>
        <div className={classes.PromotionStatusContainer}>
          {Promoted && <PromotionStatus />}
        </div>

        <div className={classes.likeButtonContainer}>
          {isLikeable && <LikeButton />}
        </div>
      </div>
      <div className={classes.imageContainer}>
        <Image src={src} />
      </div>
      <div className={classes.BottumContent}>
        <div className={classes.content}>
          <div className={classes.title}> {title} </div>
          {description && (
            <div className={classes.description}> {description} </div>
          )}
          <div className={classes.price}> ${price} </div>
        </div>
        <div className={classes.shopBtnContiner}>
          {showShop && <ShopButton />}
        </div>
      </div>
    </Link>
  )
}

export default ItemCard
