import PropTypes from 'prop-types'
import { Button } from 'antd'
import React from 'react'
import FeatherIcon from 'feather-icons-react'
import classes from './filter.module.css'

import { categoriesData } from '/data/filterData'
import FilterButton from '../buttons/filterButton/FilterButton'

const Filter = ({ title, buttons }) => {
  return (
    <div className={classes.container}>
      <div className={classes.filterTitle}>{title}</div>
      <div className={classes.buttonsContainer}>
        {buttons.map((button, index) => (
          <FilterButton
            iconSrc={button.iconSrc}
            label={button.label}
            action={button.action}
            key={index}
            className={classes.button}
          />
        ))}
      </div>
    </div>
  )
}

export default Filter

// Filter.propTypes = {
//   buttons: PropTypes.exact([
//     {
//       label: PropTypes.string,
//       iconSrc: PropTypes.string,
//       action: PropTypes.string,
//     },
//   ]),
// }
