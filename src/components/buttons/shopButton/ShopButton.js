import { Button } from 'antd'
import classes from './ShopButton.css'

export const ShopButton = () => {
  return (
    <Button
      className={classes['btn-shopping']}
      size="middle"
      shape="circle"
      style={{
        float: 'right',
        color: '#fff',
      }}
      icon={
        <FeatherIcon
          className="shopping-icon"
          size={16}
          icon={'shopping-cart'}
        />
      }
    ></Button>
  )
}
