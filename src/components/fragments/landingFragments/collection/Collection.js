import PrimaryBtn from '../../../buttons/PrimaryBtn/PrimaryBtn'
import CardGalery from '../../../cards/cardGallery/CardGalery'
import classes from './Collection.module.css'

const Collection = ({ title, subtitle, numberCardGallery, showbtn }) => {
  return (
    <div className={classes.container}>
      <div className={classes['super-field']}>
        {title ? <div className={classes['card-title']}>{title}</div> : null}
        {subtitle ? (
          <div className={classes['card-sub']}>{subtitle}</div>
        ) : null}
      </div>

      {new Array(numberCardGallery).fill(null).map((_, index) => {
        return <CardGalery key={index} />
      })}

      {showbtn === true ? (
        <div className={classes.BtnContainer}>
          <PrimaryBtn children="EXPLORE ALL" />
        </div>
      ) : null}
    </div>
  )
}

export default Collection
