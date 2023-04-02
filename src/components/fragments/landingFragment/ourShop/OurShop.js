import ItemCard from '../../../cards/ItemCard/ItemCard'
import classes from './OurShop.module.css'

//  mock data changet with data fetched from API
import { ourShopData } from '../../../../../data/ourShopData'
import PrimaryBtn from '../../../buttons/PrimaryBtn/PrimaryBtn'
const imgSrc = require('/src/assets/img/card-image.jpg')

const OurShop = () => {
  return (
    <div className={classes.ourShopContainer}>
      <h2 className={classes.title}>Our Shop</h2>
      <div className={classes.ourProducts}>
        {ourShopData.map((item) => (
          <ItemCard
            key={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            src={imgSrc}
            isLikeable={false}
          />
        ))}
      </div>
      <div className={classes.discoverBtnContainer}>
        <PrimaryBtn showArrow={true}> DISCOVER MORE</PrimaryBtn>
      </div>
    </div>
  )
}

export default OurShop
