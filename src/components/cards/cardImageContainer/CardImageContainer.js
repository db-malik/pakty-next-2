import Image from 'next/image'
import LikeButton from '../../buttons/likeButton/LikeButton'
import classes from './CardImageContainer.module.css'
const imageSrc = require('src/assets/img/Im_container.png')
export const CardImageContainer = ({ imageSrc, alt }) => {
  return (
    <div className={classes.imageContainer}>
      <Image src={imageSrc} responsive fill alt={'alt'} />{' '}
      <LikeButton className="like-button" />
    </div>
  )
}
