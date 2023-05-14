import PropTypes from 'prop-types'
import { Button } from 'antd'
import React, { useState } from 'react'
import FeatherIcon from 'feather-icons-react'
import classes from './filter.module.css'

import { categoriesData } from '/data/filterData'
import FilterButton from '../buttons/filterButton/FilterButton'



const Filter = ({ title, buttons, onFilterSelect }) => {

  const handleButtonClick = (filterId) => {
    onFilterSelect(filterId);
  };


  return (
    <div className={classes.container}>
      <div className={classes.filterTitle}>{title}</div>
      <div className={classes.buttonsContainer}>
        {buttons.slice(0, 5).map((button, index) => (
          <FilterButton
            iconSrc={button.iconSrc}
            label={button.label}
            action={button.action}
            key={index}
            className={classes.button}      
            onClick={() => handleButtonClick(button.categorie_id)}
          />
        ))}
      </div>
    </div>
  )
}

export default Filter

Filter.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      iconSrc: PropTypes.string,
      label: PropTypes.string.isRequired,
      action: PropTypes.string.isRequired,
    })
  ).isRequired,
}
