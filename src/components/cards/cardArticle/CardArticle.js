import FeatherIcon from 'feather-icons-react/build/FeatherIcon'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import classes from './CardArticle.module.css'

const CardArticle = ({ article }) => {
  const { _id, title, date, content, image } = article
  return (
    <div className={classes.cardContainer}>
      <div className={classes.imageContainer}>
        <Image src={image} fill alt="image article" />
      </div>

      <div className={classes.cardBody}>
        <div className={classes.textDate}>{date}</div>
        <div className={classes.title}> {title} </div>
        <div className={classes.content}> {content.slice(0, 150)}... </div>

        <Link
          className="text-link transform-uppercase"
          href={`/magazine/post/${_id}`}
        >
          <div className={classes.readMore}>
            <span> Read More </span> <FeatherIcon icon={'arrow-right'} />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default CardArticle
