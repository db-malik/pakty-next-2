import Image from 'next/image'
import React from 'react'
import CardBigMedia from '../../../cards/cardBigMedia/cardBigMedia'

import classes from './TryOurFree3D.module.css'

const TryOurFree3D = () => {
  return (
    <div className={classes.cardContainer}>
      <CardBigMedia
        child={
          <div className={classes.leftContainer}>
            <Image src="/assets/img/try-free-image.jpg" fill alt="image" />
          </div>
        }
        title="Try, choose, and save your favorite furniture before shopping."
        description1="3D furniture models with different designs, colors, and textures are readily available. Select what you want.
        "
        //description2="ultricies. Leo montes amet enim donec nisl platea. Condimentum elit vulputate et et. Purus enim cras lorem facilisi donec. Ipsum nisl sed mauris nisl convallis facilisi augue orci id. Augue"
        buttonContent="DESIGN MY SPACE"
        linkTo="/become-pro"
        mediaPosition="right"
      />
    </div>
  )
}

export default TryOurFree3D
