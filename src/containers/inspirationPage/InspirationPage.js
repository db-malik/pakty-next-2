import React, { useState } from 'react'
import Filter from '../../components/filter/Filter'
import Collection from '../../components/fragments/landingFragments/collection/Collection'
import Slider from '../../components/fragments/comonFragment/slider/Slider'

import classes from './InspirationPage.module.css'

import { ButtonsInspirationFilter } from '/data/filterData'

import { paginate } from '../../utils/paginate/paginate'
import BtnNumberPage from '../../components/buttons/btnNumberPage/BtnNumberPage'

//mock data
import { collectionData } from '/data/collectionData'

const InspirationPage = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const onePageProducts = paginate(collectionData, pageNumber, 18)

  const numberOfPages = collectionData.length / 18

  const goToPage = (index) => {
    setPageNumber(index)
  }
  return (
    <div>
      <Slider
        title="Decor ideas for your space"
        image="/assets/img/slider-2.jpg"
        content="If you're searching for the newest trends or modest ideas for 3D Furniture: we've got you the best."
      />
      <div className="containerColored">
        <Filter
          title="Choose the type of the room :"
          buttons={ButtonsInspirationFilter}
        />
        <Collection
          onePageProducts={onePageProducts}
          title=""
          subtitle=""
          numberCardGallery={3}
        />
        <div className={classes.paginationContainer}>
          {new Array(numberOfPages).fill(null).map((_, index) => (
            <BtnNumberPage onClick={() => goToPage(index + 1)} key={index}>
              {index + 1}
            </BtnNumberPage>
          ))}
        </div>
      </div>
    </div>
  )
}

export default InspirationPage
