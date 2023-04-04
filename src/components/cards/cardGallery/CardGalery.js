/*
   this card represente the galery of 6 product in collection section  design contain :
   - 6 images
*/

import Image from 'next/image'
import Link from 'next/link'
import classes from './CardGalery.module.css'
const imageSrc = require('/src/assets/img/Im_container.png')
// import ima from '../../../assets/img/p1.png'
import CardItemCollection from '../cardItemCollection/CardItemCollection'

const CardGalery = () => {
  return (
    <div className={classes.parent}>
      <div className={`${classes.div1} ${classes.images}`}>
        <CardItemCollection imageSrc={imageSrc} />
      </div>
      <div className={`${classes.div2} ${classes.images}`}>
        <CardItemCollection imageSrc={imageSrc} />
      </div>
      <div className={`${classes.div3} ${classes.images}`}>
        <CardItemCollection imageSrc={imageSrc} />
      </div>
      <div className={`${classes.div4} ${classes.images}`}>
        <CardItemCollection imageSrc={imageSrc} />
      </div>
      <div className={`${classes.div5} ${classes.images}`}>
        <CardItemCollection imageSrc={imageSrc} />
      </div>
      <div className={`${classes.div6} ${classes.images}`}>
        <CardItemCollection imageSrc={imageSrc} />
      </div>
    </div>
  )
}

export default CardGalery
