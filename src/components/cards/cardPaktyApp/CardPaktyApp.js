import Image from 'next/image'
import React from 'react'
import classes from './CardPaktyApp.module.css'

export const CardPaktyApp = ({
  title,
  subtitle,
  imageSrc,
  backgroundColor,
}) => {
  return (
    <div style={{ backgroundColor }} className={classes.container}>
      <div className={classes.content}>
        <div className="titleFragments">{title}</div>
        <div className={classes.subtitle}>{subtitle}</div>
      </div>
      <div className={classes.imageContainer}>
        <Image src={imageSrc} fill alt="image" />
      </div>
    </div>
  )
}
