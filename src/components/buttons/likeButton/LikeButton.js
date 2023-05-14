/**
 * The above function exports a React component for a like button with a heart
 * icon.
 * @returns The `LikeButton` component is being returned, which renders an Ant
 * Design `Button` component with a heart icon from the `feather-icons-react`
 * library. The `className` prop is passed down to the `Button` component as a
 * class name, which is defined in the `LikeButton.module.css` file.
 */
import { Button } from 'antd'
import FeatherIcon from 'feather-icons-react'
import classes from './LikeButton.module.css'
import { useState } from "react"

const LikeButton = ( ) => {
  const [likes, setLikes] = useState(false)
 const  likeHandler= ()=>{
  setLikes(!likes)
 }
  return (
    <Button
    style={likes? {backgroundColor: '#11F4BD' }: null}
      className={classes['like-Button']}
      icon={<FeatherIcon icon="heart" size={18} onClick={likeHandler} />}
    ></Button>
  )
}

export default LikeButton
