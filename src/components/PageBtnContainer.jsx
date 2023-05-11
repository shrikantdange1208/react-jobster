import React from 'react'
import { PageBtnContainerWrapper } from '../assets/wrappers/PageBtnContainerWrapper'
import { useDispatch, useSelector } from 'react-redux'
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi'
import { changePage } from '../features/allJobs/allJobsSlice'

const PageBtnContainer = () => {
  const { numOfPages, page } = useSelector((store) => store.allJobs)
  const dispatch = useDispatch()

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1
  })

  const nextPage = () => {
    let newPage = page
    if (newPage === numOfPages) {
      newPage = 1
    } else {
      newPage = newPage + 1
    }
    dispatch(changePage(newPage))
  }

  const prevPage = () => {
    let newPage = page
    if (newPage === 1) {
      newPage = numOfPages
    } else {
      newPage = newPage - 1
    }
    dispatch(changePage(newPage))
  }

  return (
    <PageBtnContainerWrapper>
      <button className="prev-btn" onClick={prevPage}>
        <HiChevronDoubleLeft />
      </button>
      <div className="btn-container">
        {pages.map((pageNumber) => {
          return (
            <button
              key={pageNumber}
              type="button"
              className={pageNumber === page ? 'pageBtn active' : 'pageBtn'}
              onClick={() => dispatch(changePage(pageNumber))}
            >
              {pageNumber}
            </button>
          )
        })}
      </div>
      <button className="next-btn" onClick={nextPage}>
        <HiChevronDoubleRight />
      </button>
    </PageBtnContainerWrapper>
  )
}

export default PageBtnContainer
