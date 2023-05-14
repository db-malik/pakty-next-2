import React, { useEffect, useState } from 'react'
import { ButtonsStoreFilter } from '../../../data/filterData'
import BtnNumberPage from '../../components/buttons/btnNumberPage/BtnNumberPage'
import Filter from '../../components/filter/Filter'
import Slider from '../../components/fragments/comonFragment/slider/Slider'
import ProductsPage from '../../components/paginations/productsPagination/productsPage/ProductsPage'
import { Pagination, PaginationItem } from '@mui/material'

import { paginate } from '../../utils/paginate/paginate'
import classes from './OurStore.module.css'

const OurStore = () => {

  const [pageNumber, setPageNumber] = useState(1)
  const [products, setProducts] = useState([])
  const productsOnPage = paginate(products, pageNumber, 16)
  const numberOfPages = Math.round(products.length / 16)

  const [selectedFilterId, setSelectedFilterId] = useState(null);

  const handleChange = (event, value) => {
    setPageNumber(value)
    // Do something with the page number here, such as navigating to a specific page
  }
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const Data = localStorage.getItem('products')
      setProducts(JSON.parse(Data))
    }
  }, [])


  const handleFilterSelect = (filterId) => {
    setSelectedFilterId(filterId);
   };




  return (
    <div>
      <Slider widthContent="500px" title="Discover our store and explore more about 3D furniture." image="/assets/img/store.png" content="" />
      <div className={classes.containerColored}>
        <Filter onFilterSelect={handleFilterSelect} title="Filter your product" buttons={ButtonsStoreFilter} />

        <div className={classes.mainContainer}>

          <ProductsPage filterId={selectedFilterId} products={products} items={productsOnPage} />

          <div className={classes.paginationContainer}>
            <Pagination
              count={numberOfPages}
              variant="outlined"
              shape="rounded"
              onChange={handleChange} // Handle page change events
            />

          </div>
         
        </div>
      </div>
    </div>
  )
}

export default OurStore
