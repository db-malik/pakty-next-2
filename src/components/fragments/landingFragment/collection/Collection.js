import PrimaryBtn from '../../../buttons/PrimaryBtn/PrimaryBtn'
import CardGalery from '../../../cards/cardGallery/CardGalery'
import classes from './Collection.module.css'

const Collection = ({ title, subtitle, numberCardGallery }) => {
  return (
    <div>
      <div className={classes['super-field']}>
        {title ? <div className={classes['card-title']}>{title}</div> : null}
        {subtitle ? (
          <div className={classes['card-sub']}>{subtitle}</div>
        ) : null}
      </div>

      {new Array(numberCardGallery).fill(null).map((_, index) => {
        return <CardGalery key={index} />
      })}
      <div className={classes.BtnContainer}>
        <PrimaryBtn children="EXPLORE ALL" />
      </div>
    </div>
  )
}

export default Collection
