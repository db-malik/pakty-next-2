import { Button, Col, Radio, Row, Tabs } from 'antd'
import ReactStars from 'react-rating-stars-component'
import FeatherIcon from 'feather-icons-react'

import Image from 'next/image'
import React, { useState } from 'react'
import classes from './CardProductdetail.module.css'

// mock data for prodact detail : To Do : replace it with data fetched from API
import { productDetail } from '/data/oneProductDetail'

const CardProductDetail = () => {
  const { images, entitled, price, description, category, colors, status } =
    productDetail

  // feat: on click image rendr bigger
  const [clickedIndex, setClickedIndex] = useState(0)
  const handleImageClick = (index) => {
    setClickedIndex(index)
  }

  return (
    <div className={classes.container}>
      <div className={classes.leftContainer}>
        {images.length > 0
          ? images.map((image, index) => (
              <div
                className={classes.imageContainer}
                key={index}
                onClick={() => handleImageClick(index)}
              >
                <Image
                  src={image}
                  fill
                  alt={`Image ${index}`}
                  sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                />
              </div>
            ))
          : 'null'}
      </div>
      <div className={classes.midleContainer}>
        <div className={classes.selectedImage}>
          {clickedIndex !== -1 && (
            <Image
              src={images[clickedIndex]}
              fill
              alt={`Image ${clickedIndex}`}
            />
          )}
        </div>
      </div>
      <div className={classes.rightContainer}>
        <div className={classes['article-title-large']}>{entitled}</div>
        <div className="price">$ {price}</div>
        <div className={classes.raiting}>
          <Row align={'middle'}>
            <ReactStars
              count={5}
              value={4}
              onChange={() => {}}
              size={24}
              activeColor="#ffd700"
            />
            <span className={classes.review}>1 customer review</span>
          </Row>
        </div>

        <p className={classes.blog}>
          Lorem ipsum dolor sit amet consectetur. Ullamcorper sed turpis sapien
          id mi id venenatis in id. Pretium massa amet sapien turpis quam
          turpis. Sit sed malesuada velit adipiscing urna pretium magna. Sit
          quis at diam et sed at eu. Sed non ut elit amet proin. Ullamcorper
          purus viverra odio a luctus. Lectus fringilla sed scelerisque in et
          dolor dictumst molestie. Quam nunc dolor pellentesque viverra nulla
          quam proin. Dignissim.
        </p>
        <div>
          <Row>
            <Col span={6}>
              <Radio.Group className="buttons green" onChange={() => {}}>
                <Radio.Button value="large">-</Radio.Button>
                <Radio.Button value="default">0</Radio.Button>
                <Radio.Button value="small">+</Radio.Button>
              </Radio.Group>
            </Col>
            <Col span={18}>
              <Button block className="pakty-btn-outlined">
                <span>ADD TO CART </span>
                <FeatherIcon
                  className="button-icon"
                  size={18}
                  icon="shopping-bag"
                />
              </Button>
            </Col>
          </Row>
        </div>
        <div className={classes['inspiration-icons']}>
          <FeatherIcon className="mx-10" icon="heart" size={16} />{' '}
          <span className="mx-10"> | </span>{' '}
          <FeatherIcon className="mx-10" icon="mail" size={16} />
        </div>
        <div className={classes.categories}>
          <strong>SKU: </strong> 12
          <br />
          <strong>Categories: </strong> Furniture, Modern
        </div>
      </div>
      <div>
        <div></div>
      </div>
    </div>
  )
}

export default CardProductDetail
