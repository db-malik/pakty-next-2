import Image from 'next/image'
import React from 'react'

import classes from './TryOurFree3D.module.css'
import CardBigMediaRight from '@/components/cards/cardBigMedia/cardBigMediaRight'

const TryOurFree3D = () => {
  return (
    <div className={classes.cardContainer}>
      <CardBigMediaRight
        child={<Image src="/assets/img/try-free-image.jpg" fill alt="image" />}
        title="Try, choose, and save your favorite furniture before shopping."
        description1="Experience the future of furniture shopping with Pakty's cutting-edge 3D visualization tool. Try it for free and bring your design ideas to life before making a purchase.
        "
        buttonContent="DESIGN MY SPACE"
        linkTo="/become-pro"
      />
    </div>
  )
}

export default TryOurFree3D
