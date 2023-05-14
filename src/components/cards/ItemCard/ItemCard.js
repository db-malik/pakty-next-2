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
import defaultImage from '../../../assets/img/armoire.png'
import { ImageList, ImageListItem } from '@mui/material'

const ItemCard = ({ src, title, price, Promoted, isLikeable, showShop, linkTo }) => {

  return (
   <div className={classes.container}>
   
   <div className={classes.likeButtonContainer}>{isLikeable && <LikeButton />}</div>
 
       
      <div className={classes.cardContainer}>
           <Link  href={linkTo ? linkTo : '#'}>
        <div className={classes.PromotionStatusContainer}>{Promoted && <PromotionStatus promotion={Promoted} />}</div>
      
        <div className={classes.imageContainer}>
          <ImageList sx={{ width: 'auto', height: 'auto', overflow: 'hidden' }} cols={1}>
            <ImageListItem>
              <img
                src={`${src}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${src}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={'image ' + title}
                loading="lazy"
              />
            </ImageListItem>
          </ImageList>

          {/* <img src={src} width={100} height={100} alt="image" placeholder="blur" priority /> */}
        </div>
        {title && <div className={classes.title}> {title} </div>}
        {price && <div className={classes.price}> {price} DT </div>}
        <div className={classes.shopBtnContiner}>{showShop && <ShopButton />}</div>
    </Link>
      </div>
      </div>
  )
}

export default ItemCard
