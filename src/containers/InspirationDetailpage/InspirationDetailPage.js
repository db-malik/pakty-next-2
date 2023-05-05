import { Button, Col, Row } from 'antd'
import FeatherIcon from 'feather-icons-react/build/FeatherIcon'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ItemCard from '../../components/cards/ItemCard/ItemCard'
import classes from './InspirationDetailPage.module.scss'

//mock data
import { inspirationDetailData } from '../../../data/inspirationDetailData'
import { allProductData } from '../../../data/ProductsData'
import ExploreAllBar from '../../components/molucules/exploreAllBar/ExploreAllBar'
import PrimaryBtn from '@/components/buttons/PrimaryBtn/PrimaryBtn'
import { FaFacebookF } from 'react-icons/fa'
import { AiFillMail, AiOutlineHeart, AiOutlineInstagram, AiOutlineMail, AiOutlineTwitter } from 'react-icons/ai'
import { icons } from 'react-icons'
import Link from 'next/link'
import BackButton from '@/components/buttons/backButton/BackButton'
import Spinner from '@/components/spinner/Spinner'

const InspirationDetailPage = ({ selectedProduct }) => {
  const { entitled, description, price, materials, measurements, images } = selectedProduct
  const products = allProductData.slice(0, 4)
  const { title, author, image, content, categories } = inspirationDetailData

  const social = { mail: '/contact-us', facebook: 'https://www.facebook.com', twitter: 'https://www.twitter.com', instagram: 'https://wwww.instagram.com' }

  const [imgSrc, set_imgSrc] = useState(author.image)

  useEffect(() => {
    set_imgSrc(author.image)
  }, [author.image])

  return (
    <div className={`${classes.container}   lineairBackground`}>
      <div className={classes.backBtnContainer}>
        <BackButton />
      </div>
      <div className={classes.detailContainer}>
        <div className={classes.imageContainer}>
          <Image src={images[0]} fill alt="image" />
        </div>
        <div className={classes.content}>
          <h1 className={classes.articleTitleLarge}>{entitled}</h1>
          <div className={classes.author}>
            <div className={classes.authorImage}>
              <Image
                src={imgSrc}
                onLoadingComplete={(result) => {
                  if (result.naturalWidth === 0) {
                    // Broken image
                    set_imgSrc(fallbackSrc)
                  }
                }}
                onError={() => {
                  set_imgSrc(fallbackSrc)
                }}
                fill
                alt="author image"
              />
            </div>
            <div className={classes.authorName}>{author.name}</div>
          </div>
          <p className={classes.blog}>{content}</p>
          <div className={classes.btnContainer}>
            <PrimaryBtn style={`${classes.btnStyle}`} showArrow={false} linkTo={'#'}>
              Get this design
            </PrimaryBtn>
          </div>
          <div className={classes.inspirationIcons}>
            <AiOutlineHeart className={classes.icon} />
            <span className="mx-10"> | </span>
            <Link href={social.mail}>
              <AiOutlineMail className={classes.icon} />
            </Link>
            <Link href={social.facebook}>
              <FaFacebookF className={classes.icon} />
            </Link>
            <Link href={social.instagram}>
              <AiOutlineInstagram className={classes.icon} />
            </Link>
            <Link href={social.twitter}>
              <AiOutlineTwitter className={classes.icon} />
            </Link>
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
