/**
 * The function exports a React component called Collection that displays a card
 * gallery with a title, subtitle, and an optional "Explore All" button.
 * @returns A React functional component named "Collection" is being returned. It
 * takes in several props such as title, subtitle, numberCardGallery, showbtn, and
 * onePageProducts. It renders a container div with a title and subtitle if they
 * are provided. It then maps over an array of length numberCardGallery and renders
 * a CardGalery component for each iteration. Finally, if showbtn is true,
 */
import Link from 'next/link'
import PrimaryBtn from '../../../buttons/PrimaryBtn/PrimaryBtn'
import CardGalery from '../../../cards/cardGallery/CardGalery'
import classes from './Collection.module.scss'

const Collection = ({ title, subtitle, numberCardGallery, showbtn, onePageProducts }) => {
  console.log(onePageProducts)
  return (
    <div className={classes.container}>
      {subtitle ? (
        <div className={classes['super-field']}>
          <div className={classes['card-title']}>{title}</div>
          <div className={classes['card-sub']}>{subtitle}</div>
        </div>
      ) : null}

      <div className={classes.galeryContainer}>
        {new Array(numberCardGallery).fill(null).map((_, index) => {
          const products = onePageProducts.slice(index * 6, index * 6 + 6)
          return <CardGalery sixProducts={products} key={index} />
        })}
      </div>

      {showbtn === true ? (
        <div className={classes.btnContainer}>
          <PrimaryBtn style={`${classes.btnStyle}`} linkTo={'/inspiration'} children="EXPLORE ALL" />
        </div>
      ) : null}
    </div>
  )
}

export default Collection
