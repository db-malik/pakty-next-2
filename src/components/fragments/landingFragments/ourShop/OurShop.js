import classes from './OurShop.module.scss'

//  mock data changet with data fetched from API
import { ourShopData } from '../../../../../data/ourShopData'
import PrimaryBtn from '../../../buttons/PrimaryBtn/PrimaryBtn'
import OurShopCard from '../../../cards/ourShopcard/OurShopCard'
import { useState } from 'react'
import RoundedButton from '@/components/buttons/roudedArrow/RoundedArrowLeft'
import RoundedArrowLeft from '@/components/buttons/roudedArrow/RoundedArrowLeft'
import RoundedArrowRight from '@/components/buttons/roudedArrow/RoundedArrowRight'
import getUrl from '@/utils/getUrl/GetUrl'
const imgSrc = require('/src/assets/img/card-image.jpg')

const OurShop = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(4)

  const clickedArrow = (direction) => {
    if (direction === 'left') {
      setSelectedProduct(selectedProduct != 4 ? selectedProduct - 4 : products.length)
    }
    if (direction === 'right') {
      setSelectedProduct(selectedProduct < products.length - 4 ? selectedProduct + 4 : 4)
    }
  }

  console.log(products)
  return (
    <div className={classes.container}>
      <div className={classes.title}>Our Shop</div>
      <div className={classes.products}>
        {products.slice(selectedProduct - 4, selectedProduct).map((item, index) => (
          <div className={`${classes[`card${index + 1}`]}`}>
            <OurShopCard
              key={item.id}
              title={item.entitled ? item.entitled : null}
              description={item.description ? item.description.slice(0, 20) : null}
              price={item.price ? item.price : null}
              src={item.images[0] ? getUrl(item.images[0]) : '/assets/img/No-Image.png'}
              isLikeable={false}
              linkTo={`/store/product/${item._id}`}
            />
          </div>
        ))}
      </div>

      <div className={classes.button}>
        <div className={classes.arrowsContainer}>
          <RoundedArrowLeft onClick={() => clickedArrow('left')} /> <RoundedArrowRight onClick={() => clickedArrow('right')} />
        </div>
        <PrimaryBtn style={`${classes.styleBtn}`} linkTo={'/store'} showArrow={true}>
          DISCOVER MORE
        </PrimaryBtn>
      </div>
    </div>
  )
}

export default OurShop
