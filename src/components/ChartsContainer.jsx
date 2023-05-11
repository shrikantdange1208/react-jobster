import React, { useState } from 'react'
import { ChartsContainerWrapper } from '../assets/wrappers/ChartsContainerWrapper'
import { useSelector } from 'react-redux'
import BarChartComponent from './BarChartComponent'
import AreaChartComponent from './AreaChartComponent'

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true)
  const { monthlyApplications } = useSelector((store) => store.allJobs)

  return (
    <ChartsContainerWrapper>
      <h4>Monthly Applications</h4>
      <button type="button" onClick={() => setBarChart(!barChart)}>
        {barChart ? 'Area Chart' : 'Bar Chart'}
      </button>
      {barChart ? (
        <BarChartComponent data={monthlyApplications} />
      ) : (
        <AreaChartComponent data={monthlyApplications} />
      )}
    </ChartsContainerWrapper>
  )
}

export default ChartsContainer
