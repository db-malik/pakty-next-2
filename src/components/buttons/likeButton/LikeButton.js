import { Button } from 'antd'
import FeatherIcon from 'feather-icons-react'
import classes from './LikeButton.module.css'

const LikeButton = ({ className }) => {
  return (
    <Button
      className={classes['like-Button']}
      icon={<FeatherIcon icon="heart" size={16} />}
    ></Button>
  )
}

export default LikeButton
