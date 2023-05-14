import React from 'react'
import CardBlog from '../../../cards/cardBlog/CardBlog'
import classes from './OurBlog.module.scss'

// this array  is to mock data
import { ourBlogData } from '/data/OurBlogData'
const OurBlog = ({ showTitle }) => {
  return (
    <div className={classes.container}>
      {showTitle ? <div className={`${classes.title} titleFragments`}>Our Blog</div> : null}
      <div className={classes.blogsContainer}>
        {ourBlogData.map((item, index) => (
          <div className={`${classes[`blog${index + 1}`]}`}>
            <CardBlog key={item.id} title={item.title} description={item.description} imageSrc={item.src} linkTo={`/magazine/post/${item.id}`} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurBlog
