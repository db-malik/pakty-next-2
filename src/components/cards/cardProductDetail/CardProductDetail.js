import { Button, Col, Radio, Row, Tabs } from 'antd'
import ReactStars from 'react-rating-stars-component'
import FeatherIcon from 'feather-icons-react'

import Image from 'next/image'
import React, { useState } from 'react'
import classes from './CardProductdetail.module.scss'

// mock data for prodact detail : To Do : replace it with data fetched from API
import { productDetail } from '/data/oneProductDetail'
import PlusMinusBtn from '@/components/buttons/plusMinusBtn/PlusMinusBtn'
import { ImageList, ImageListItem } from '@mui/material'

const CardProductDetail = ({ product }) => {
  const { images, entitled, price, description, category, colors, status } = product[0]
  console.log(images)
  const [quantity, setQuantity] = useState(0)
  const [disabled, setDisabled] = useState(false)

  function increment() {
    setQuantity(quantity + 1)
  }
  function decrement() {
    setQuantity(quantity - 1)
  }

  // feat: on click image rendr bigger
  const [clickedIndex, setClickedIndex] = useState(0)
  const handleImageClick = (index) => {
    setClickedIndex(index)
  }

  return (
    <div className={classes.productContainer}>
      <div className={classes.imagesContainer}>
        <ImageList sx={{ width: 100, height: 'auto', overflow: 'hidden' }} cols={1} gap={54}>
          {images.slice(0, 4).map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={entitled}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      <div className={classes.selectedImage}>
        <div className={classes.imageContainer}>{clickedIndex !== -1 && <Image src={images[clickedIndex]} fill alt={`Image ${clickedIndex}`} />}</div>
      </div>
      <div className={classes.descriptions}>
        <div className={classes.title}>{entitled}</div>
        <div className={classes.price}>$ {price}</div>
        <div className={classes.raiting}>
          <Row align={'middle'}>
            <ReactStars count={5} value={4} onChange={() => {}} size={24} activeColor="#FF5C00" />
            <span className={classes.review}>1 customer review</span>
          </Row>
        </div>

        <p className={classes.desc}>IN STOCK, ONLY FEW LEFT ORDER NOW TO SECURE THIS ITEM.</p>
        <div className={classes.actions}>
          <Row>
            <Col className="mx-10" span={6}>
              <div className={classes.btnsContainer}>
                <PlusMinusBtn disabled={quantity === 0} click={decrement}>
                  -
                </PlusMinusBtn>
                <PlusMinusBtn>{quantity}</PlusMinusBtn>
                <PlusMinusBtn click={increment}>+</PlusMinusBtn>
              </div>
            </Col>
            <Col span={14}>
              <Button block className="pakty-btn-outlined">
                <span>ADD TO CART </span>
                <FeatherIcon className="button-icon" size={18} icon="shopping-bag" />
              </Button>
            </Col>
          </Row>
        </div>
        <div className={classes.categories}>
          <div className={classes['inspiration-icons']}>
            <FeatherIcon className="mx-10" icon="heart" size={16} /> <span className="mx-10"> | </span> <FeatherIcon className="mx-10" icon="mail" size={16} />
          </div>
          <div>
            <strong>SKU: </strong> 12
            <br />
            <strong>Categories: </strong> Furniture, Modern
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardProductDetail
