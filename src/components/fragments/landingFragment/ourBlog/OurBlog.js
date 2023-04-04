import React from 'react'
import CardBlog from '../../../cards/cardBlog/CardBlog'
import classes from './OurBlog.module.css'

// this array  is to mock data
import { ourBlogData } from '/data/OurBlogData'
const OurBlog = () => {
  return (
    <>
      {ourBlogData.map((item, index) => (
        <CardBlog
          key={item.id}
          title={item.title}
          description={item.description}
          imageSrc={item.src}
        />
      ))}
    </>
  )
}

export default OurBlog
