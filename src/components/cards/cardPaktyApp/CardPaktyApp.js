import Image from 'next/image'
import React from 'react'
import classes from './CardPaktyApp.module.scss'

export const CardPaktyApp = ({
  title,
  subtitle,
  imageSrc,
  backgroundColor,
}) => {
  return (
    <div style={{ backgroundColor }} className={classes.container}>
      <div className={classes.contentContainer}>
        <div className={classes.title}>{title}</div>
        <div className={classes.description}>{subtitle}</div>
      </div>
      <div className={classes.mediaContainer}>
        <Image src={imageSrc} fill alt="image" />
      </div>
    </div>
  )
}
