import Image from 'next/image'
import React from 'react'
import PrimaryBtn from '../../../buttons/PrimaryBtn/PrimaryBtn'
import classes from './Slider.module.scss'
const Slider = ({
  type,
  image,
  title,
  content,
  widthContent,
  linkTo,
  buttonLabel,
}) => {
  return (
    <div className={classes.container}>
      <div
        style={type === 'home' ? { height: '700px' } : { height: '460px' }}
        className={classes.imageContainer}
      >
        <Image src={image} fill alt="image" />
      </div>
      <div
        className={classes.description}
        style={{ width: widthContent, color: '#0A3556', top: '173px' }}
      >
        <h1 className={classes.title}>{title}</h1>
        <div className={classes.content}>{content}</div>
      </div>

      {linkTo ? (
        <div className={classes.btnContainer}>
          <PrimaryBtn showArrow={false} linkTo={linkTo}>
            {buttonLabel}
          </PrimaryBtn>
        </div>
      ) : null}
    </div>
  )
}

export default Slider
