import React from 'react'
import PlanCard from '../../../cards/planCard/PlanCard'

import classes from './Plans.module.css'

//mock plan data
const planData = [
  {
    _id: 1,
    title: 'STARTER PLAN',
    price: '100 $',
    description:
      'Lorem ipsum dolor sit amet consectetur. Elementum acurna dignissim egestas faucibus urna elementum. Turpis pharetra est at vel quam nisl velit facilisis.',
  },
  {
    _id: 2,
    title: 'Premium',
    price: '150 $',
    description:
      'Lorem ipsum dolor sit amet consectetur. Elementum acurna dignissim egestas faucibus urna elementum. Turpis pharetra est at vel quam nisl velit facilisis.',
  },
  {
    _id: 3,
    title: 'unlimited',
    price: '300 $',
    description:
      'Lorem ipsum dolor sit amet consectetur. Elementum acurna dignissim egestas faucibus urna elementum. Turpis pharetra est at vel quam nisl velit facilisis. Turpis pharetra est at vel quam nisl velit facilisis.',
  },
]

const Plans = () => {
  const plans = planData
  return (
    <div className={classes.plansContainer}>
      {plans.map((plan) => (
        <PlanCard plan={plan} />
      ))}
    </div>
  )
}

export default Plans
