import React from 'react'
import CardItemCollection from '../../cardItemCollection/CardItemCollection'

import classes from './smallCardGallery.module.css'

const SmallCardGallery = ({ images, linkTo }) => {
  return (
    <div>
      <div className={classes.leftContainer}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${classes[`div${index + 1}`]} ${classes.images}`}
          >
            <CardItemCollection
              islikeable={false}
              imageSrc={image}
              linkTo={linkTo}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SmallCardGallery
