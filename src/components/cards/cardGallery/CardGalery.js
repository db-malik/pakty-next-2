/*
   this card represente the galery of 6 product in collection section  design contain :
   - 6 images
*/

import classes from './CardGalery.module.scss'

import CardItemCollection from '../cardItemCollection/CardItemCollection'

const CardGalery = ({ sixProducts }) => {
  return (
    <div className={classes.container}>
      {sixProducts.map((item, index) => (
        <div className={`${classes[`div${index + 1}`]}`}>
          <CardItemCollection linkTo={`inspiration/detail/${item.product._id}`} imageSrc={item.product.images[0]} islikeable={false} />
        </div>
      ))}
    </div>
  )
}

export default CardGalery
