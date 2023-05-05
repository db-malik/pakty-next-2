import React from 'react'

import classes from './PlusMinusBtn.module.scss'
const PlusMinusBtn = ({ disabled, children, click, style }) => {
  return (
    <button disabled={disabled} className={`${classes.style} ${classes.container}`} onClick={click}>
      {children}
    </button>
  )
}

export default PlusMinusBtn
