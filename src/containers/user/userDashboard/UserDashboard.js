/**
 * The UserDashboard function is a React component that displays a slider, a
 * collection of products, a call-to-action for becoming a pro, and a contact card.
 * @returns The `UserDashboard` component is being returned.
 */
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import CardBigMedia from '../../../components/cards/cardBigMedia/cardBigMedia'
import CardContactUs from '../../../components/cards/cardContactUs/CardContactUs'
import Slider from '../../../components/fragments/comonFragment/slider/Slider'
import BecomePro from '../../../components/fragments/landingFragments/becomePro/BecomePro'
import Collection from '../../../components/fragments/landingFragments/collection/Collection'

import classes from './UserDashboard.module.css'

//mock data
import { collectionData } from '/data/collectionData'
import CardBigMediaRight from '@/components/cards/cardBigMedia/cardBigMediaRight'

const UserDashboard = ({ products, inspirationData, categories }) => {
  const [userData, setUserData] = useState(null)
  const [productsData, setProductsData] = useState(null)
  useEffect(() => {
    const storedData = localStorage.getItem('user')
    const productsData = localStorage.getItem('products')
    if (storedData) {
      setUserData(JSON.parse(storedData))
    } else {
      Router.push('/login') // Redirect to login page if no user data found
    }
  }, [])

  const prod = productsData
  return (
    <>
      <Slider
        widthContent="700px"
        type="user-dashboard"
        title={`Welcome!`}
        content="Explore your creativity and start creating your project with PAKTY"
        image="/assets/img/store.png"
      />
      <div className={classes.collectionContainer}>
        <Collection
          title="Get inspired by our Collection"
          subtitle="Discover our latest work by categories"
          numberCardGallery={1}
          showbtn={true}
          onePageProducts={inspirationData}
        />
      </div>
      <div className={classes.cardMediaContainer}>
        <div className={classes.cardContainer}>
          <CardBigMediaRight
            child={<Image src="/assets/img/try-free-image.jpg" fill alt="image" />}
            title="Are you a professional? Come join our team!"
            description1="Join our community of professionals and connect with like-minded individuals in the world of interior design.

            Sign up now to become a part of our growing Pro community!
        "
            buttonContent="BECOME PRO"
            linkTo="/become-pro"
          />
        </div>
      </div>
      <div className={classes.contactUsContainer}>
        <CardContactUs />
      </div>
    </>
  )
}

export default UserDashboard
