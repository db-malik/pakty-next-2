/*
   this card represente card of Media (image or video) with description  aside (  why Pakty  section and join us section) contain :
   - image or video
   - title
   - description
   - Button  (link)
*/
import Image from 'next/image'
import PrimaryBtn from '../../buttons/PrimaryBtn/PrimaryBtn'
import classes from './cardBigMediaRight.module.css'

const CardBigMediaRight = ({ title, description1, description2, description3, buttonContent, linkTo, child }) => (
  <div className={classes.cardContainer}>
    <div className={classes.leftContainer}>
      <h2 className={classes.title}>{title}</h2>
      <div className={classes.description}>{description1}</div>
      <div className={classes.button}>
        <PrimaryBtn style={`${classes.btnStyle}`} showArrow={true} linkTo={linkTo}>
          {buttonContent}
        </PrimaryBtn>
      </div>
    </div>
    <div className={classes.rightContainer}>{child}</div>
  </div>
)

export default CardBigMediaRight
