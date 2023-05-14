import Image from 'next/image'
import React from 'react'
import { Col, Row } from 'antd'
import classes from './PostPage.module.scss'

// mock post data //*css*/`
import { articlePost } from '/data/articleData.js'
import YouMyAlsoLike from '../../components/molucules/exploreAllBar/ExploreAllBar'
import OurBlog from '../../components/fragments/landingFragments/ourBlog/OurBlog'
import ExploreAllBar from '../../components/molucules/exploreAllBar/ExploreAllBar'
import CardBigMedia from '@/components/cards/cardBigMedia/cardBigMedia'
import CardBigMediaRight from '@/components/cards/cardBigMedia/cardBigMediaRight'

const PostPage = ({ postData }) => {
  postData = articlePost
  const { date, author, title, image, introduction1, introduction2, section, endPost } = postData

  return (
    <div className={classes.postContainer}>
      <div className={classes.imageContainer}>
        <Image src={image} fill alt="post image" />
      </div>

      <div className={classes.article}>
        <div className={classes.topPost}>
          <div className={classes.date}>{date}</div>
          <div className={classes.title}>{title}</div>
          <div className={classes.author}>
            <div className={classes.authorImage}>
              <Image src={author.image} fill />
            </div>
            <span className={classes.authorName}>{author.name}</span>
          </div>
          <div className={classes.articleContent}>
            <div>{introduction1}</div>
            <br />
            <div>{introduction2}</div>
          </div>
        </div>
        <div className={classes.section}>
          <div className={classes.sectionTitle}>{section.title}</div>
          <div className={classes.sectionContent}>{section.content}</div>
        </div>
        <div className={classes.sectionImage}>
          <Image src={section.image} fill alt="post-image" />
        </div>
        <div className={classes.bottum}>{endPost}</div>
      </div>
      <div className={classes.youmyAlsoLike}>
        <ExploreAllBar label="Also you may like" linkTo={'/magazine'} />
        <div className={classes.other}>
          <OurBlog />
        </div>
      </div>
    </div>
  )
}

export default PostPage
