/* This is a React component called `PlanCard` that displays a list of plans with
their titles, prices, and descriptions. It imports `Image` and `Link` components
from the `next` library, as well as the `React` library. It also imports a CSS
module called `PlanCard.module.css` for styling. The component receives a prop
called `plans`, but it is not used and instead uses a mock data array called
`planData`. The `map` function is used to iterate over the `planData` array and
render a `Link` component for each plan with its corresponding title, price, and
description. */

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import classes from './PlanCard.module.css'

const PlanCard = ({ plan }) => {
  return (
    <div className={classes.cardContainer}>
      <Link href={`/plan/${plan._id}`} key={plan._id} className={classes.planContainer}>
        <div className={classes.title}>{plan.title}</div>
        <div className={classes.price}>{plan.price} dt</div>
        <ul className={classes.description}>
          {plan.description.map((item, index) => (
            <li key={index}>
              <span className={classes.dots}>.</span> {item}
            </li>
          ))}
        </ul>
      </Link>
    </div>
  )
}

export default PlanCard
