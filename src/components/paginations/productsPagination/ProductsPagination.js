import React, { useState } from 'react'
import { paginate } from '../../../utils/paginate/paginate'
import PrimaryBtn from '../../buttons/PrimaryBtn/PrimaryBtn'
import ProductsPage from './productsPage/ProductsPage'
import classes from './ProductPagination.module.css'
const ProductsPagination = ({ allItems, pageSize }) => {
  const numberOfPages = Math.round(allItems.length / pageSize)
  console.log(numberOfPages)
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

      {new Array(numberOfPages).fill(null).map((_, index) => (
        <div>
          <PrimaryBtn onClick={(e) => nextPage(e)}>{index + 1}</PrimaryBtn>
        </div>
      ))}
      {/* <ProductsPage items={productsPage} className={classes.btnContainer} />
      {currentPage > 1 && (
        <PrimaryBtn onClick={(e) => prevPage(e)}>{i}</PrimaryBtn>
      )}
      {productsPage.length === pageSize && (
        <PrimaryBtn onClick={(e) => nextPage(e)}>Next Page</PrimaryBtn>
      )} */}
    </div>
  )
}

export default ProductsPagination
