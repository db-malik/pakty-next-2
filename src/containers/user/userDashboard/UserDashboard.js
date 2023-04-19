/**
 * The UserDashboard function is a React component that displays a slider, a
 * collection of products, a call-to-action for becoming a pro, and a contact card.
 * @returns The `UserDashboard` component is being returned.
 */
import Image from 'next/image'
import React from 'react'
import CardBigMedia from '../../../components/cards/cardBigMedia/cardBigMedia'
import CardContactUs from '../../../components/cards/cardContactUs/CardContactUs'
import Slider from '../../../components/fragments/comonFragment/slider/Slider'
import BecomePro from '../../../components/fragments/landingFragments/becomePro/BecomePro'
import Collection from '../../../components/fragments/landingFragments/collection/Collection'

import classes from './UserDashboard.module.css'

//mock data
import { collectionData } from '/data/collectionData'

const UserDashboard = ({ user }) => {
  const prod = collectionData
  return (
    <>
      <Slider
        title={`Welcome ${user.name} !`}
        content="Explore your creativity and start creating your project with PAKTY"
        image="/assets/img/store.png"
        linkTo="/project"
        buttonLabel="Design my project"
      />
      <div className="containerWhite">
        <Collection
          title="Get inspired by our Collection"
          subtitle="Discover our latest work by categories"
          numberCardGallery={1}
          showbtn={true}
          onePageProducts={prod}
        />
      </div>
      <div className="containerColored">
        <CardBigMedia
          child={
            <Image src="/assets/img/become-pro-img.jpg" fill alt="image" />
          }
          title="You are pro ? join us !"
          description1="Lorem ipsum dolor sit amet consectetur. Quam cras dignissim mi nibh. Id magna et phasellus ullamcorper.Lorem ipsum dolor sit amet consectetur. Quam cras dignissim mi nibh. Id magna et phasellus ullamcorper."
          description2="Neque tristique pretium in sed posuere adipiscing risus ligula. Quis vitae dapibus lectus id pretium nisl congue."
          buttonContent="become pro"
          linkTo="/become-pro"
          mediaPosition="right"
        />
      </div>
      <div className="containerWhite">
        <CardContactUs />
      </div>
    </>
  )
}

export default UserDashboard
