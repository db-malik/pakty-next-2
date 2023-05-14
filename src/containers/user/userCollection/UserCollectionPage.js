import React, { useState } from 'react'
import BtnNumberPage from '../../../components/buttons/btnNumberPage/BtnNumberPage'
import Filter from '../../../components/filter/Filter'
import Slider from '../../../components/fragments/comonFragment/slider/Slider'
import Collection from '../../../components/fragments/landingFragments/collection/Collection'
import { paginate } from '../../../utils/paginate/paginate'
import classes from './UserCollectionPage.module.css'

// filter button labels and actions
import { ButtonsInspirationFilter } from '/data/filterData'

//mock data
import { collectionData } from '/data/collectionData'
import RangePrice from '../../../components/filter/rangePrice/RangePrice'

const UserCollectionPage = ({ user }) => {
  const [pageNumber, setPageNumber] = useState(1)
  const onePageProducts = paginate(collectionData, pageNumber, 18)

  const numberOfPages = collectionData.length / 18

  const goToPage = (index) => {
    setPageNumber(index)
  }

  return (
    <>
      <Slider
        title="Select your favourite design Now !"
        content="Choose your favourite room and send it to us.
        Send us photos and your home will be transformed. "
        image="/assets/img/collection-banner.jpg"
      />
      <div className="containerColored">
        <Filter
          title="Choose the type of the room :"
          buttons={ButtonsInspirationFilter}
        />
        <RangePrice title="Your Budget" width="500px" />
        <Collection
          onePageProducts={onePageProducts}
          title=""
          subtitle=""
          numberCardGallery={3}
        />
        <div className={classes.paginationContainer}>
          {new Array(numberOfPages).fill(null).map((_, index) => (
            <BtnNumberPage
              isActive={pageNumber === index + 1 ? true : false}
              onClick={() => goToPage(index + 1)}
              key={index}
            >
              {index + 1}
            </BtnNumberPage>
          ))}
        </div>
      </div>
    </>
  )
}

export default UserCollectionPage
