import Image from 'next/image'
import Link from 'next/link'
import classes from './CardGalery.module.css'
const imageSrc = require('/src/assets/img/Im_container.png')
// import ima from '../../../assets/img/p1.png'
import { CardImageContainer } from '../cardImageContainer/CardImageContainer'

const CardGalery = () => {
  return (
    <div className={classes.parent}>
      <div className={`${classes.div1} ${classes.images}`}>
        <CardImageContainer imageSrc={imageSrc} />
      </div>
      <div className={`${classes.div2} ${classes.images}`}>
        <CardImageContainer imageSrc={imageSrc} />
      </div>
      <div className={`${classes.div3} ${classes.images}`}>
        <CardImageContainer imageSrc={imageSrc} />
      </div>
      <div className={`${classes.div4} ${classes.images}`}>
        <CardImageContainer imageSrc={imageSrc} />
      </div>
      <div className={`${classes.div5} ${classes.images}`}>
        <CardImageContainer imageSrc={imageSrc} />
      </div>
      <div className={`${classes.div6} ${classes.images}`}>
        <CardImageContainer imageSrc={imageSrc} />
      </div>
    </div>
  )
}

export default CardGalery
