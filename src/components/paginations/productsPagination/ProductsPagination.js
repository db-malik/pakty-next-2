import React, { useState } from 'react'
import { Pagination, PaginationItem } from '@mui/material'

import { paginate } from '../../../utils/paginate/paginate'
import PrimaryBtn from '../../buttons/PrimaryBtn/PrimaryBtn'
import ProductsPage from './productsPage/ProductsPage'
import classes from './ProductPagination.module.css'
const ProductsPagination = ({ allItems, pageSize }) => {
  const [pageNumber, setPageNumber] = useState(1)
  const numberOfPages = Math.round(allItems.length / pageSize)

  const [currentPage, setCurrentPage] = useState(1)
  const productsPage = paginate(allItems, currentPage, pageSize)

  const nextPage = (e) => {
    e.preventDefault()
    setCurrentPage((currentPage) => currentPage + 1)
  }

  const prevPage = () => {
    e.preventDefault()
    setCurrentPage((currentPage) => currentPage - 1)
  }

  return (
    <div>
      <ProductsPage items={productsPage} className={classes.btnContainer} />
      <div className={classes.paginationContainer}>
        <Pagination
          count={numberOfPages}
          variant="outlined"
          shape="rounded"
          onChange={handleChange} // Handle page change events
        />
      </div>
      {/* {new Array(numberOfPages).fill(null).map((_, index) => (
        <div>
          <PrimaryBtn onClick={(e) => nextPage(e)}>{index + 1}</PrimaryBtn>
        </div>
      ))} */}
    </div>
  )
}

export default ProductsPagination
