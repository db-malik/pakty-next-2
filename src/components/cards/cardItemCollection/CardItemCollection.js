/*
   this card represente card of one Item in our collection section design contain :
   - like button (if showed = true)
   - image
*/

import Image from 'next/image'
import Link from 'next/link'
import LikeButton from '../../buttons/likeButton/LikeButton'
import classes from './CardItemCollection.module.css'
const imageSrc = require('src/assets/img/Im_container.png')
const CardItemCollection = ({ islikeable, imageSrc, linkTo }) => {
  return (
    <>
      <Link href={linkTo ? linkTo : '#'} className={classes.imageContainer}>
        <Image src={imageSrc} fill alt="image" />
        {islikeable ? (
          <div className={classes.LikeBtnContainer}>
            <LikeButton className="like-button" />
          </div>
        ) : null}
      </Link>
    </>
  )
}

export default CardItemCollection
