import Image from 'next/image'
import React from 'react'
import PrimaryBtn from '../../../buttons/PrimaryBtn/PrimaryBtn'
import classes from './Slider.module.css'
const Slider = ({ type, image, title, content, linkTo, buttonLabel }) => {
  return (
    <div className={classes.container}>
      <div
        style={type === 'home' ? { height: '115vh' } : { height: '80vh' }}
        className={classes.imageContainer}
      >
        <Image src={image} fill alt="image" />
      </div>
      <div
        style={type === 'home' ? { color: '#fff' } : { color: '#0A3556' }}
        className={classes.contentContainer}
      >
        <h1 className={classes.title}>{title}</h1>
        <div className={classes.content}>{content}</div>
        <div className={classes.btnContainer}>
          {linkTo ? (
            <PrimaryBtn showArrow={false} linkTo={linkTo}>
              {buttonLabel}
            </PrimaryBtn>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default Slider
