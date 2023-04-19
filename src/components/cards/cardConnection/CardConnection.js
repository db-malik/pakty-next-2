import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../../fragments/header/logo/Logo'
import classes from './CardConnection.module.css'
const CardConnection = ({ child, imageSrc }) => {
  return (
    <div className={classes.card}>
      <div className={classes.logoContainer}>
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div className={classes.container}>
        <div className={classes.leftContainer}>{child}</div>
        <div className={classes.rightContainer}>
          <Image src={imageSrc} fill alt="image" />
        </div>
      </div>
    </div>
  )
}

export default CardConnection
