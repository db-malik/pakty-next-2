import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../../fragments/header/logo/Logo'
import classes from './CardConnection.module.css'
const CardConnection = ({ form, title, desc, imageSrc }) => {
  return (
    <div class={classes.container}>
      <div class={classes.leftContainer}>
        <div class={classes.logo}>
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div class={classes.title}>
          <div class={classes.titleSup}>{title}</div>
          <div class={classes.titleDesc}>{desc}</div>
        </div>
        <div class={classes.form}>{form}</div>
      </div>
      <div class={classes.rightContainer}>
        <Image src={imageSrc} fill />
      </div>
    </div>
  )
}

export default CardConnection
