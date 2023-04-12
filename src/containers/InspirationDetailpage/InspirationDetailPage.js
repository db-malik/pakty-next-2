import { Button, Col, Row } from 'antd'
import FeatherIcon from 'feather-icons-react/build/FeatherIcon'
import Image from 'next/image'
import React from 'react'
import ItemCard from '../../components/cards/ItemCard/ItemCard'
import classes from './InspirationDetailPage.module.css'

//mock data
import { inspirationDetailData } from '../../../data/inspirationDetailData'
import { allProductData } from '../../../data/ProductsData'
import ExploreAllBar from '../../components/molucules/exploreAllBar/ExploreAllBar'

const InspirationDetailPage = ({ _id }) => {
  const products = allProductData.slice(0, 4)
  const { title, author, image, content, categories } = inspirationDetailData

  return (
    <div className={classes.container}>
      <div className={classes.DetailContainer}>
        <div className={classes.imageContainer}>
          <Image src={image} fill alt="image" />
        </div>
        <div className={classes.content}>
          <h1 className={classes.articleTitleLarge}>{title}</h1>
          <div className={classes.author}>
            <div className={classes.authorImage}>
              <Image src={author.image} fill alt="author image" />
            </div>
            <div className={classes.authorName}>{author.name}</div>
          </div>{' '}
          <p className={classes.blog}>{content}</p>
          <div className={classes.btnContainer}>
            <Button block className="pakty-btn-outlined">
              Get this design
            </Button>
          </div>
          <div className={classes.inspirationIcons}>
            <FeatherIcon className="mx-10" icon="heart" size={16} />{' '}
            <span className="mx-10"> | </span>{' '}
            <FeatherIcon className="mx-10" icon="mail" size={16} />
          </div>
          <div>
            <strong>Categories: </strong> {categories}
          </div>
        </div>
      </div>
      <ExploreAllBar label="Also you may like" linkTo={'/magazine'} />
      <div className={classes.productsContainer}>
        {products.map((product) => (
          <ItemCard
            src={product.images[0]}
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

export default InspirationDetailPage
