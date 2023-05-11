import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { DashboardFormPageWrapper } from '../../assets/wrappers/DashboardFormPageWrapper'
import { FormRow, FormRowSelect } from '../../components'
import {
  handleChange,
  clearValues,
  createJob,
  editJob,
} from '../../features/job/jobSlice'

const AddJob = () => {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job)

  const { user } = useSelector((store) => store.user)

  const dispatch = useDispatch()

  useEffect(() => {
    if (!isEditing) {
      dispatch(
        handleChange({
          name: 'jobLocation',
          value: user.location,
        })
      )
    }
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!position || !company || !jobLocation) {
      toast.error('Pleas fill out all the fields!')
      return
    }
    if (isEditing) {
      dispatch(
        editJob({
          jobId: editJobId,
          job: { position, company, jobLocation, jobType, status },
        })
      )
    } else {
      dispatch(createJob({ position, company, jobLocation, jobType, status }))
    }
  }

  const handleJobInput = (event) => {
    const name = event.target.name
    const value = event.target.value
    dispatch(handleChange({ name, value }))
  }

  return (
    <DashboardFormPageWrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>{isEditing ? 'edit job' : 'add job'}</h3>
        <div className="form-center">
          {/* position */}
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleJobInput}
          />
          {/* company */}
          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleJobInput}
          />
          {/* job location */}
          <FormRow
            type="text"
            name="jobLocation"
            value={jobLocation}
            handleChange={handleJobInput}
            labelText="job location"
          />
          {/* status */}
          <FormRowSelect
            name="status"
            value={status}
            handleChange={handleJobInput}
            list={statusOptions}
          />
          {/* job type */}
          <FormRowSelect
            name="jobType"
            value={jobType}
            handleChange={handleJobInput}
            list={jobTypeOptions}
            labelText="job type"
          />

          <div className="btn-container">
            <button
              type="button"
              className="btn btn-block clear-btn"
              onClick={() => dispatch(clearValues())}
            >
              clear
            </button>
            <button
              type="submit"
              className="btn btn-block submit-btn"
              disabled={isLoading}
            >
              {isEditing ? 'edit job' : 'add job'}
            </button>
          </div>
        </div>
      </form>
    </DashboardFormPageWrapper>
  )
}

export default AddJob
