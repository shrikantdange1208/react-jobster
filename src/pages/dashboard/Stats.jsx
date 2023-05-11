import React, { useEffect } from 'react'
import { showStats } from '../../features/allJobs/allJobsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { ChartsContainer, StatsContainer } from '../../components'
import Loading from '../../components/Loading'

const Stats = () => {
  const { isLoading, monthlyApplications } = useSelector(
    (store) => store.allJobs
  )
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(showStats())
  }, [])

  if (isLoading) {
    return <Loading />
  }
  return (
    <div>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </div>
  )
}

export default Stats
