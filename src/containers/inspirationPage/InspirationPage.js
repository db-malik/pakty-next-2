import React, { useState } from 'react'
import Filter from '../../components/filter/Filter'
import Collection from '../../components/fragments/landingFragments/collection/Collection'
import Slider from '../../components/fragments/comonFragment/slider/Slider'

import classes from './InspirationPage.module.scss'
import { ButtonsInspirationFilter } from '/data/filterData'
import { paginate } from '../../utils/paginate/paginate'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import BtnNumberPage from '../../components/buttons/btnNumberPage/BtnNumberPage'

//mock data
import { collectionData } from '/data/collectionData'
import { Pagination, PaginationItem } from '@mui/material'

const InspirationPage = ({ inspirationData }) => {
  const [pageNumber, setPageNumber] = useState(1)
  const onePageProducts = paginate(inspirationData, pageNumber, 18)

  const numberOfPages = Math.round(inspirationData.length / 18)

  const handleChange = (event, value) => {
    setPageNumber(value)
    // Do something with the page number here, such as navigating to a specific page
  }

  return (
    <div className={classes.container}>
      <Slider
        widthContent="700px"
        type="inspiration"
        title="Decor ideas for your space"
        image="/assets/img/slider-2.jpg"
        content="If you're searching for the newest trends or modest ideas for 3D Furniture: we've got you the best."
      />
      <div className={`${classes.mainContainer} lineairBackground`}>
        <div className={classes.filterContainer}>
          <Filter title="Choose the type of the room :" buttons={ButtonsInspirationFilter} />
        </div>
        <div>
          <Collection className={classes.collectionContainer} onePageProducts={onePageProducts} title="" subtitle="" numberCardGallery={3} />
        </div>
        <div className={classes.paginationContainer}>
          <Pagination
            count={numberOfPages}
            variant="outlined"
            shape="rounded"
            onChange={handleChange} // Handle page change events
            renderItem={(item) => <PaginationItem {...item} />}
          />
        </div>
      </div>
    </div>
  )
}

export default InspirationPage
