import React from 'react'
import CardBlog from '../../../cards/cardBlog/CardBlog'
import classes from './OurBlog.module.css'

// this array  is to mock data
import { ourBlogData } from '/data/OurBlogData'
const OurBlog = ({ showTitle }) => {
  return (
    <div className={classes.container}>
      {showTitle ? <div className="titleFragments">Our Blog</div> : null}
      <div className={classes.CardsContainer}>
        {ourBlogData.map((item, index) => (
          <div className={classes.cardContainer}>
            <CardBlog
              key={item.id}
              title={item.title}
              description={item.description}
              imageSrc={item.src}
              linkTo={`/blog/${item.id}`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurBlog
