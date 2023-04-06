import React from 'react'
import Filter from '../../components/filter/Filter'
import SliderInspiration from '../../components/fragments/inspirationFragments/sliderInspiration/SliderInspiration'
import Collection from '../../components/fragments/landingFragments/collection/Collection'

import { ButtonsInspirationFilter } from '/data/filterData'

const InspirationPage = () => {
  return (
    <div>
      <SliderInspiration />
      <Filter buttons={ButtonsInspirationFilter} />
      <Collection title="" subtitle="" numberCardGallery={3} />
    </div>
  )
}

export default InspirationPage
