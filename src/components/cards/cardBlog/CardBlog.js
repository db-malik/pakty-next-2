import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import classes from './CardBlog.module.css'
function CardBlog({ title, description, imageSrc, linkTo }) {
  return (
    <Link href={linkTo ? linkTo : '#'}>
      <div className={classes.container}>
        <div className={classes.imageContainer}>
          <Image src={imageSrc} fill />
        </div>
        <div className={classes.description}>
          <div className={classes.descriptionTop}>{title}</div>
          <div className={classes.descriptionBottum}>{description}</div>
        </div>
      </div>
    </Link>
  )
}

export default CardBlog
