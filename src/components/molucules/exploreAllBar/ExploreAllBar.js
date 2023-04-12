import FeatherIcon from 'feather-icons-react/build/FeatherIcon'
import Link from 'next/link'
import React from 'react'
import classes from './ExploreAllBar.module.css'
const ExploreAllBar = ({ label, linkTo }) => {
  return (
    <div className={classes.container}>
      <span>{label}</span>
      <Link className={classes.explore} href={linkTo}>
        <span>EXPLORE ALL </span>
        <FeatherIcon icon="arrow-right" />
      </Link>
    </div>
  )
}

export default ExploreAllBar
