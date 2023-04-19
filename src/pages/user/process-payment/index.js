import { NextSeo } from 'next-seo'
import React from 'react'
import ProgressSteps from '../../../components/test/ProgressSteps'
import StepContent from '../../../components/test/StepContent'
import ProcessPayment from '../../../containers/user/processPayment/ProcessPayment'
import UserLayout from '../../../layouts/userLayout/UserLayout'

import classes from './style.module.css'

// mock data user
const user = { name: 'Sarah Mezrani', image: '/assets/img/user.png' }

const index = () => {
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
        <div className={classes.main}>
          <ProgressSteps />
          <StepContent />
        </div>
      </UserLayout>
    </>
  )
}

export default index
