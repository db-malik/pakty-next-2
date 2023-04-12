import Image from 'next/image'
import React from 'react'
import { Col, Row } from 'antd'
import classes from './PostPage.module.css'

// mock post data //*css*/`
import { articlePost } from '/data/articleData.js'
import YouMyAlsoLike from '../../components/molucules/exploreAllBar/ExploreAllBar'
import OurBlog from '../../components/fragments/landingFragments/ourBlog/OurBlog'
import ExploreAllBar from '../../components/molucules/exploreAllBar/ExploreAllBar'

const PostPage = ({ postData }) => {
  postData = articlePost
  const { date, author, title, image, introductions, sections, endPost } =
    postData

  return (
    <div className={classes.container}>
      <div className={classes.topPostcontainer}>
        <div className={classes.TopImageContainer}>
          <Image src={image} fill alt="post image" />
        </div>
        <div className={classes.postInformation}>
          <span className={classes.date}>{date}</span>
          <h1 className={classes.title}>{title}</h1>
          <div className={classes.author}>
            <span className={classes.authorImage}>
              <Image fill src={author.image} />
            </span>
            <span className={classes.authorName}>{author.name}</span>
          </div>
        </div>
      </div>
      <div className={classes.postContent}>
        {introductions.map((item, index) => (
          <div className={classes.intro}>
            <p className={classes.textBody}>{item}</p>
            <br />
          </div>
        ))}
        <div className={classes.sections}>
          {sections.map((section, index) => (
            <Row
              justify={'space-between'}
              align={'start'}
              className={classes.section}
            >
              <Col xs={24} xl={11}>
                <div className={classes.sectionBody}>
                  <h2 className={classes.sectionTitle}>{section.title}</h2>
                  <p className={classes.textBody}>{section.content}</p>
                </div>
              </Col>
              <Col xs={24} xl={11}>
                <div className={classes.sectionImageContainer}>
                  <Image src={section.image} fill />
                </div>
              </Col>
            </Row>
          ))}
        </div>
        <div className={classes.endPost}>
          <p className={classes.textbody}> {endPost}</p>
        </div>
      </div>

      <ExploreAllBar label="Also you may like" linkTo={'/magazine'} />
      <OurBlog />
    </div>
  )
}

export default PostPage
