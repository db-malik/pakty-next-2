/**
 * The function exports a React component that renders a button with a child
 * element and an onClick event handler.
 * @returns The `BtnNumberPage` component is being returned, which renders an Ant
 * Design `Button` component with a `span` element inside it. The `Button`
 * component has an `onClick` event handler that is passed down as a prop from the
 * parent component, and a `className` prop that is set to the `container` class
 * from the `BtnNumberPage.module.css` file. The
 */
import { Button } from 'antd'
import React from 'react'
import classes from './BtnNumberPage.module.css'
const BtnNumberPage = ({ children, onClick, isActive }) => {
  return (
    <Button
      style={{
        backgroundColor: isActive ? '#11F4BD' : '#fff',
      }}
      onClick={onClick}
      className={classes.container}
    >
      <span>{children}</span>
    </Button>
  )
}

export default BtnNumberPage
