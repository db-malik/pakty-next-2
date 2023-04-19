import Image from 'next/image'
import React from 'react'
import CardBigMedia from '../../../cards/cardBigMedia/cardBigMedia'

import classes from './BecomePro.module.css'

const BecomePro = () => {
  return (
    <div className={classes.container}>
      <CardBigMedia
        child={<Image src="/assets/img/become-pro-img.jpg" fill alt="image" />}
        title="You are pro ? join us !"
        description1="Lorem ipsum dolor sit amet consectetur. Quam cras dignissim mi nibh. Id magna et phasellus ullamcorper."
        description2="Neque tristique pretium in sed posuere adipiscing risus ligula. Quis vitae dapibus lectus id pretium nisl congue."
        buttonContent="become pro"
        linkTo="/become-pro"
        mediaPosition="left"
      />
    </div>
  )
}

export default BecomePro
