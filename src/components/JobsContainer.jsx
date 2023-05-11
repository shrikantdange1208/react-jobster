import React, { useEffect } from 'react'
import { JobsContainerWrapper } from '../assets/wrappers/JobsContainerWrapper'
import { useDispatch, useSelector } from 'react-redux'
import Job from './Job'
import Loading from './Loading'
import { getAllJobs } from '../features/allJobs/allJobsSlice'
import PageBtnContainer from './PageBtnContainer'

const JobsContainer = () => {
  const {
    isLoading,
    jobs,
    page,
    totalJobs,
    numOfPages,
    search,
    searchStatus,
    searchType,
    sort,
  } = useSelector((store) => store.allJobs)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllJobs())
  }, [page, search, searchStatus, searchType, sort])

  if (isLoading) {
    return (
      <JobsContainerWrapper>
        <Loading center />
      </JobsContainerWrapper>
    )
  }

  if (jobs.length === 0) {
    return (
      <JobsContainerWrapper>
        <h2>no jobs to display...</h2>
      </JobsContainerWrapper>
    )
  }

  return (
    <JobsContainerWrapper>
      <h5>
        {totalJobs} Job{jobs.length > 1 && 's'} found
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </JobsContainerWrapper>
  )
}

export default JobsContainer
