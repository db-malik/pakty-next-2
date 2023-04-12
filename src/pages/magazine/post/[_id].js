import { NextSeo } from 'next-seo'
import Head from 'next/head'
import React from 'react'
import PostPage from '../../../containers/postPage/PostPage'
import MainLayout from '../../../layouts/mainLayout/MainLayout'

const Post = () => {
  return (
    <>
      <NextSeo
        title="Pakty | Post "
        description="Pakty your space in 3D"
        author=""
        keywords="Visualize 3D furnitures in your project before shopping"
        image=""
      />
      <MainLayout>
        <PostPage />
      </MainLayout>
    </>
  )
}

export default Post
