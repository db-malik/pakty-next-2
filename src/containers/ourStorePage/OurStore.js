import React, { useState } from 'react'
import { ButtonsStoreFilter } from '../../../data/filterData'
import BtnNumberPage from '../../components/buttons/btnNumberPage/BtnNumberPage'
import Filter from '../../components/filter/Filter'
import Slider from '../../components/fragments/comonFragment/slider/Slider'
import ProductsPage from '../../components/paginations/productsPagination/productsPage/ProductsPage'
import { paginate } from '../../utils/paginate/paginate'
import classes from './OurStore.module.css'
import { allProductData } from '/data/ProductsData'

const OurStore = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const productsOnPage = paginate(allProductData, pageNumber, 16)
  const numberOfPages = Math.round(allProductData.length / 16)

  const goToPage = (index) => {
    setPageNumber(index)
  }

  return (
    <div>
      <Slider
        title="Discover our store and explore more about 3D furniture."
        image="/assets/img/store.png"
        content=""
      />
      <div className={classes.containerColored}>
        <Filter title="Filter your product" buttons={ButtonsStoreFilter} />

        <ProductsPage items={productsOnPage} />
        {/* <ProductsPagination allItems={allProductData} pageSize={16} /> */}

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

export default OurStore
