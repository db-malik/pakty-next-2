import Image from 'next/image'
import React from 'react'
import classes from './CardPaktyApp.module.css'

export const CardPaktyApp = ({ title, subtitle, imageSrc }) => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className="titleFragments">{title}</div>
        <div className={classes.subtitle}>{subtitle}</div>
      </div>
      <div className={classes.imageContainer}>
        <Image src={imageSrc} fill />
      </div>
    </div>
  )
}
