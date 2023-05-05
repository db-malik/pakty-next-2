import Image from 'next/image'
import React from 'react'
import PrimaryBtn from '../../../buttons/PrimaryBtn/PrimaryBtn'
import classes from './SliderLanding.module.scss'
const Slider = ({ image, title, content, linkTo, buttonLabel }) => {
  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <Image src={image} fill alt="image" />
      </div>
      <h1 className={classes.title}>{title}</h1>
      <div className={classes.content}>{content}</div>

      <div className={classes.btnContainer}>
        {linkTo ? (
          <PrimaryBtn
            style={`${classes.style}`}
            showArrow={false}
            linkTo={linkTo}
          >
            {buttonLabel}
          </PrimaryBtn>
        ) : null}
      </div>
    </div>
  )
}

export default Slider
