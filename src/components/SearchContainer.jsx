import React, { useMemo, useState } from 'react'
import { SearchContainerWrapper } from '../assets/wrappers/SearchContainerWrapper'
import { useDispatch, useSelector } from 'react-redux'
import FormRow from './FormRow'
import FormRowSelect from './FormRowSelect'
import { clearFilters, handleChange } from '../features/allJobs/allJobsSlice'

const SearchContainer = () => {
  const [localSearch, setLocalSearch] = useState('')
  const { isLoading, search, searchStatus, searchType, sort, sortOptions } =
    useSelector((store) => store.allJobs)
  const { jobTypeOptions, statusOptions } = useSelector((store) => store.job)

  const dispatch = useDispatch()

  const handleSearch = (event) => {
    const name = event.target.name
    const value = event.target.value
    dispatch(handleChange({ name, value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setLocalSearch('')
    dispatch(clearFilters())
  }

  const debounce = () => {
    console.log('debounce called')
    let timeoutID
    return (event) => {
      setLocalSearch(event.target.value)
      clearTimeout(timeoutID)
      timeoutID = setTimeout(() => {
        dispatch(
          handleChange({ name: event.target.name, value: event.target.value })
        )
      }, 1000)
    }
  }

  const optimizedDebounce = useMemo(() => debounce(), [])

  return (
    <SearchContainerWrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h4>search form</h4>
        <div className="form-center">
          {/* search position */}
          <FormRow
            type="text"
            name="search"
            value={localSearch}
            handleChange={optimizedDebounce}
          />

          {/* Search by status */}
          <FormRowSelect
            name="searchStatus"
            value={searchStatus}
            handleChange={handleSearch}
            list={['all', ...statusOptions]}
            labelText="status"
          />

          {/* Search by jobType */}
          <FormRowSelect
            name="searchType"
            value={searchType}
            handleChange={handleSearch}
            list={['all', ...jobTypeOptions]}
            labelText="job type"
          />

          {/* Sort */}
          <FormRowSelect
            name="sort"
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
            labelText="sort"
          />
          <button
            type="submit"
            className="btn btn-block btn-danger"
            disabled={isLoading}
          >
            clear filters
          </button>
        </div>
      </form>
    </SearchContainerWrapper>
  )
}

export default SearchContainer
