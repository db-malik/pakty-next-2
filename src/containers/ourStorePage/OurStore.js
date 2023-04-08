import React from 'react'
import { ButtonsStoreFilter } from '../../../data/filterData'
import Filter from '../../components/filter/Filter'
import Slider from '../../components/fragments/comonFragment/slider/Slider'
import ProductsPagination from '../../components/paginations/productsPagination/ProductsPagination'
import classes from './OurStore.module.css'
import { allProductData } from '/data/ProductsData'

const OurStore = () => {
  return (
    <div>
      <Slider
        title="Discover our store and explore more about 3D furniture."
        image="/assets/img/store.png"
        content=""
      />

      <Filter title="Filter your product" buttons={ButtonsStoreFilter} />
      <div>
        <ProductsPagination allItems={allProductData} pageSize={16} />
      </div>
    </div>
  )
}

export default OurStore
