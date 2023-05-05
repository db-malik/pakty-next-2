import { Button } from 'antd'
import FeatherIcon from 'feather-icons-react'
import classes from './ShopButton.module.css'
import Link from "next/link"

export const ShopButton = () => {
  return (
  
    <Button
      className={classes['btn-shopping']}
      size="middle"
      shape="circle"
      icon={
        <FeatherIcon
          className="shopping-icon"
          size={14}
          icon={'shopping-cart'}
        />
      }
    ></Button>
 
  )
}
