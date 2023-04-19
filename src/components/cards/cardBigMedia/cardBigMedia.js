/*
   this card represente card of Media (image or video) with description  aside (  why Pakty  section and join us section) contain :
   - image or video
   - title
   - description
   - Button  (link)
*/
import Image from 'next/image'
import PrimaryBtn from '../../buttons/PrimaryBtn/PrimaryBtn'
import classes from './cardBigMedia.module.css'

const CardBigMedia = ({
  title,
  description1,
  description2,
  buttonContent,
  linkTo,
  child,
  // mediaPosition placed in 'left' by default but if its  equal to 'right it wil be placed in the right of container
  mediaPosition,
}) => {
  return (
    <div className={classes.cardContainer}>
      {mediaPosition === 'right' ? (
        <>
          <div className={classes.contentContainer}>
            <h2 className={classes.title}>{title}</h2>
            <div className={classes.descriptionContainer}>
              <div> {description1}</div>
              <br />
              <div> {description2}</div>
            </div>

            <div className={classes.buttonContainer}>
              <PrimaryBtn showArrow={true} linkTo={linkTo}>
                {buttonContent}
              </PrimaryBtn>
            </div>
          </div>
          <div className={classes.mediaContainer}>
            {/* child : you can enter any type of  dom element video , image inside child */}
            {child}
          </div>
        </>
      ) : (
        <>
          <div className={classes.mediaContainer}>
            {/* child : you can enter any type of  dom element video , image inside child */}
            {child}
          </div>
          <div className={classes.contentContainer}>
            <h2 className={classes.title}>{title}</h2>
            <div className={classes.descriptionContainer}>
              <div> {description1}</div>
              <br />
              <div> {description2}</div>
            </div>

            <div className={classes.buttonContainer}>
              <PrimaryBtn showArrow={true} linkTo={linkTo}>
                {buttonContent}
              </PrimaryBtn>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default CardBigMedia
