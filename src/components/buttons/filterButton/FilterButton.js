import React from 'react'
import { Button } from 'antd'
import classes from './FilterButton.module.css'
import Image from 'next/image'

const FilterButton = ({ iconSrc, label }) => {
  return (
    <Button className={classes.container} size="large">
      {iconSrc ? (
        <span className={classes.iconContainer}>
          <Image
            className={classes.filterIcon}
            src={iconSrc}
            fill
            alt="image"
          />
        </span>
      ) : null}
      <span>{label} </span>
    </Button>
  )
}

export default FilterButton
