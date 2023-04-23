import Image from 'next/image'
import React from 'react'
import PrimaryBtn from '../../../buttons/PrimaryBtn/PrimaryBtn'
import classes from './Slider.module.css'
const Slider = ({ type, image, title, content, linkTo, buttonLabel }) => {
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
        style={
          type === 'home'
            ? { color: '#fff', top: '244px' }
            : { color: '#0A3556', top: '173px' }
        }
      >
        <h1 className={classes.title}>{title}</h1>
        <div className={classes.content}>{content}</div>
      </div>
      <div className={classes.btnContainer}>
        {linkTo ? (
          <PrimaryBtn showArrow={false} linkTo={linkTo}>
            {buttonLabel}
          </PrimaryBtn>
        ) : null}
      </div>
    </div>
  )
}

export default Slider
