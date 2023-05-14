import { NextSeo } from 'next-seo'
import Head from 'next/head'
import React from 'react'
import OurStore from '../../../containers/ourStorePage/OurStore'
import UserCollectionPage from '../../../containers/user/userCollection/UserCollectionPage'
import UserDashboard from '../../../containers/user/userDashboard/UserDashboard'
import UserLayout from '../../../layouts/userLayout/UserLayout'

const Collection = () => {
  // mock data user
  const user = { name: 'Sarah Mezrani', image: '/assets/img/user.png' }

  return (
    <>
      <NextSeo
        title="Pakty | User Collection"
        description="Select your favourite design Now ! "
        author=""
        keywords="Visualize 3D furnitures in your project before shopping"
        image=""
      />
      <UserLayout user={user}>
        <UserCollectionPage user={user} />
      </UserLayout>
    </>
  )
}

export default Collection
