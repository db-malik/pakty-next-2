/**
 * This is a React component that renders a button with an optional icon and label.
 * @returns The `FilterButton` component is being returned. It renders a button
 * with an optional icon and a label. The icon is displayed using the `Image`
 * component from Next.js. The component is styled using CSS modules.
 */
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
