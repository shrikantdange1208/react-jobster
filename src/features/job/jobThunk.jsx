import { getAllJobs, hideLoading, showLoading } from '../allJobs/allJobsSlice'
import customFetch, { checkForUnauthorizedRequest } from '../../utils/axios'
import { clearValues } from './jobSlice'
import { logoutUser } from '../user/userSlice'

export const createJobThunk = async (job, thunkAPI) => {
  try {
    const response = await customFetch.post('jobs', job)
    thunkAPI.dispatch(clearValues())
    return response.data
  } catch (error) {
    console.log(error)
    return checkForUnauthorizedRequest(error, thunkAPI)
  }
}

export const deleteJobThunk = async (jobId, thunkAPI) => {
  thunkAPI.dispatch(showLoading())
  try {
    const response = await customFetch.delete(`/jobs/${jobId}`)
    thunkAPI.dispatch(getAllJobs())
    return response.data
  } catch (error) {
    console.log(error.response)
    thunkAPI.dispatch(hideLoading())
    return checkForUnauthorizedRequest(error, thunkAPI)
  }
}

export const editJobThunk = async ({ jobId, job }, thunkAPI) => {
  thunkAPI.dispatch(showLoading())
  try {
    const response = await customFetch.patch(`/jobs/${jobId}`, job)
    thunkAPI.dispatch(clearValues())
    return response.data
  } catch (error) {
    console.log(error.response)
    thunkAPI.dispatch(hideLoading())
    return checkForUnauthorizedRequest(error, thunkAPI)
  }
}
