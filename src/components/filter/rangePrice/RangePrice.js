import React from 'react'
import Slider from '@mui/material/Slider'

import classes from './RangePrice.module.css'
import { withStyles } from '@mui/styles'

// custo theme for slider range-value
const CustomSlider = withStyles({
  root: {
    color: '#6f8eff',
    height: 3,
    padding: '10px 0',
  },
  track: {
    height: 4,
    borderRadius: 2,
    backgroundColor: '#11f4bd',
  },
  thumb: {
    height: 20,
    width: 20,
    backgroundColor: '#fff',
    border: '1px solid currentColor',
  },
})(Slider)
function RangePice({ width, title }) {
  const [range, setRange] = React.useState([5, 30])
  function handleChanges(event, newValue) {
    setRange(newValue)
  }
  return (
    <div style={{ width: width, padding: '20px' }}>
      <div className={classes.title}> {title} :</div>
      <div className={classes.selectedNumbers}>
        <span>{range[0]}</span>
        <span>{range[1]}</span>
      </div>

      <CustomSlider
        value={range}
        onChange={handleChanges}
        valueLabelDisplay="auto"
      />
    </div>
  )
}
export default RangePice
