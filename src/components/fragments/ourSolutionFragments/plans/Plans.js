import React from 'react'
import PlanCard from '../../../cards/planCard/PlanCard'

import classes from './Plans.module.scss'

//mock plan data
const planData = [
  {
    _id: 1,
    title: 'STARTER PLAN',
    price: '100 ',
    description: [
      'Lorem ipsum dolor sit amet consectetur.',
      ' Elementum acurna',
      'dignissim egestas faucibus urna elementum.',
      'Turpis pharetra est at vel quam nisl velit facilisis.',
    ],
  },
  {
    _id: 2,
    title: 'Premium',
    price: '150 ',
    description: [
      'Lorem ipsum dolor sit amet consectetur.',
      ' Elementum acurna',
      'dignissim egestas faucibus urna elementum.',
      'Turpis pharetra est at vel quam nisl velit facilisis.',
    ],
  },
  {
    _id: 3,
    title: 'unlimited',
    price: '300 ',
    description: [
      'Lorem ipsum dolor sit amet consectetur.',
      ' Elementum acurna',
      'dignissim egestas faucibus urna elementum.',
      'Turpis pharetra est at vel quam nisl velit facilisis.',
    ],
  },
]

const Plans = () => {
  const plans = planData
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <div className={classes.title}>Your budget didn’t fit your choice?</div>
        <div className={classes.desc}>We've created several pricing methods for you. You can select one of them.</div>
      </div>
      <div className={classes.bottum}>
        {plans.map((plan, index) => (
          <PlanCard plan={plan} className={`${classes[`plan${index + 1}`]}`} />
        ))}
      </div>
    </div>
  )
}

export default Plans
