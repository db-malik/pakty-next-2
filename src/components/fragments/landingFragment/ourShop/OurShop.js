import ItemCard from '../../../cards/ItemCard/ItemCard'
const imgSrc = require('/src/assets/img/card-image.jpg')
const OurShop = () => {
  return (
    <div>
      <ItemCard
        title="Side Table"
        description="Light single chair"
        price={145}
        src={imgSrc}
      />
    </div>
  )
}

export default OurShop
