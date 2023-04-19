import { NextSeo } from 'next-seo'
import Head from 'next/head'
import React from 'react'
import OurStore from '../../../containers/ourStorePage/OurStore'
import UserDashboard from '../../../containers/user/userDashboard/UserDashboard'
import UserLayout from '../../../layouts/userLayout/UserLayout'

const Store = () => {
  // mock data user
  const user = { name: 'Sarah Mezrani', image: '/assets/img/user.png' }

  return (
    <>
      <NextSeo
        title="Pakty | User Dashboard"
        description="Discover our store and explore more about 3D furniture."
        author=""
        keywords="Visualize 3D furnitures in your project before shopping"
        image=""
      />
      <UserLayout user={user}>
        <UserDashboard user={user} />
      </UserLayout>
    </>
  )
}

export default Store
