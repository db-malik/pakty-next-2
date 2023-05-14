import React from 'react'
import PrimaryBtn from '../../../buttons/PrimaryBtn/PrimaryBtn'
import CardBigMedia from '../../../cards/cardBigMedia/cardBigMedia'
import SmallCardGallery from '../../../cards/cardGallery/smallCardGallery/SmallCardGallery'
import CardItemCollection from '../../../cards/cardItemCollection/CardItemCollection'
import classes from './Explore3D.module.scss'

const images = [
  '/assets/img/inspiration/image-inspiration-1.png',
  '/assets/img/inspiration/image-inspiration-2.png',
  '/assets/img/inspiration/image-inspiration-3.png',
  '/assets/img/inspiration/image-inspiration-4.png',
]

const Explore3D = () => {
  const MediaImages = images.map((image, index) => (
    <div key={index} className={`${classes[`div${index + 1}`]} ${classes.images}`}>
      <CardItemCollection imageSrc={image} islikeable={false} />
    </div>
  ))

  return (
    <div className={classes.cardContainer}>
      <div className={classes.title}>
        <h2 className={classes.cardTitle}>Explore 3D furniture inspiration</h2>
      </div>
      <div className={classes.description}>Discover our latest work by categories</div>
      <div className={classes.content}>
        <CardBigMedia
          child={<SmallCardGallery images={images} linkTo="/inspiration" />}
          title="Visualize, Try, and Save "
          description1="Discover our latest work by categories Visualize, Try, and Save 
          Discover your design inspiration with Pakty's 3D furniture library, featuring an extensive range of high-quality, customizable furniture models. Explore our diverse range of styles and themes, from traditional to modern and everything in between."
          description2="Find the perfect pieces to complement your unique style and bring your virtual interior design projects to life."
          description3="Start exploring now and get inspired with Pakty App!"
          buttonContent="EXPLORE ALL"
          linkTo="/inspiration"
        />
      </div>
    </div>
  )
}

export default Explore3D
