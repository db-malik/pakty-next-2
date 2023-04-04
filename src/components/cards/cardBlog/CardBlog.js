import Image from 'next/image'
import React from 'react'
import classes from './CardBlog.module.css'
function CardBlog({ title, description, imageSrc }) {
  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <Image src={imageSrc} fill />
      </div>
      <div className={classes.descriptionTop}>{title}</div>
      <div className={classes.descriptionBottum}>{description}</div>
    </div>
  )
}

export default CardBlog
