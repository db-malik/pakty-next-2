import { Button, Col, Row } from 'antd'
import Image from 'next/image'
import FeatherIcon from 'feather-icons-react/build/FeatherIcon'
import React from 'react'
import LikeButton from '../../buttons/likeButton/LikeButton'
import classes from './ItemCard.module.css'
import PromotionStatus from '../../molucules/promtionStatus/PromotionStatus'

const ItemCard = (props) => {
  const { src, title, description, price, features, isLikeable } = props
  return (
    <div className={classes.cardContainer}>
      <div className={classes.upperContent}></div>
      <PromotionStatus />
      <LikeButton />
      <div className={classes.imageContainer}>
        <Image src={src} />
      </div>
      <div className={classes.BottumContent}>
        <div className={classes.title}> {title} </div>
        <div className={classes.description}> {description} </div>
        <div className={classes.price}> ${price} </div>
      </div>
    </div>
  )
}

export default ItemCard
