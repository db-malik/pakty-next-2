import React from 'react'
import PrimaryBtn from '../../../buttons/PrimaryBtn/PrimaryBtn'
import CardBigMedia from '../../../cards/cardBigMedia/cardBigMedia'
import SmallCardGallery from '../../../cards/cardGallery/smallCardGallery/SmallCardGallery'
import CardItemCollection from '../../../cards/cardItemCollection/CardItemCollection'
import classes from './Explore3D.module.css'

const images = [
  '/assets/img/collections/Image_container-1.jpg',
  '/assets/img/collections/Image_container-2.jpg',
  '/assets/img/collections/Image_container-3.jpg',
  '/assets/img/collections/Image_container-4.jpg',
]

const Explore3D = () => {
  const MediaImages = images.map((image, index) => (
    <div
      key={index}
      className={`${classes[`div${index + 1}`]} ${classes.images}`}
    >
      <CardItemCollection imageSrc={image} islikeable={false} />
    </div>
  ))

  return (
    <div className={classes.cardContainer}>
      <div className={classes.top}>
        <h2 className={classes.cardTitle}>Explore 3D furniture inspiration</h2>
        <p className={classes.cardDesc}>
          Discover our latest work by categories
        </p>
      </div>
      <div className={classes.cardBigMediaContainer}>
        <CardBigMedia
          child={
            <div className={classes.leftContainer}>
              <SmallCardGallery images={images} linkTo="/inspiration" />
            </div>
          }
          title="Try, choose, and save your favorite furniture before shopping."
          description1="Copy
        3D furniture models with different designs, colors, and textures are readily available. Select what you want."
          description2="ultricies. Leo montes amet enim donec nisl platea. Condimentum elit vulputate et et. Purus enim cras lorem facilisi donec. Ipsum nisl sed mauris nisl convallis facilisi augue orci id. Augue"
          buttonContent="EXPLORE ALL"
          linkTo="/inspiration"
        />
      </div>
    </div>
  )
}

export default Explore3D
