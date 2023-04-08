import React from 'react'
import Filter from '../../components/filter/Filter'
import Collection from '../../components/fragments/landingFragments/collection/Collection'
import Slider from '../../components/fragments/comonFragment/slider/Slider'

import { ButtonsInspirationFilter } from '/data/filterData'

const InspirationPage = () => {
  return (
    <div>
      <Slider
        title="Decor ideas for your space"
        image="/assets/img/slider-2.jpg"
        content="If you're searching for the newest trends or modest ideas for 3D Furniture: we've got you the best."
      />

      <Filter
        title="Choose the type of the room :"
        buttons={ButtonsInspirationFilter}
      />
      <Collection title="" subtitle="" numberCardGallery={3} />
    </div>
  )
}

export default InspirationPage
