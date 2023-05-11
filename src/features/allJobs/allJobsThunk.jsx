import customFetch, { checkForUnauthorizedRequest } from '../../utils/axios'

export const getAllJobsThunk = async (_, thunkAPI) => {
  const { page, search, searchType, searchStatus, sort } =
    thunkAPI.getState().allJobs

  let url = `/jobs?page=${page}&status=${searchStatus}&jobType=${searchType}&sort=${sort}`
  if (search) {
    url = url + `&search=${search}`
  }
  try {
    const response = await customFetch.get(url)
    return response.data
  } catch (error) {
    console.log(error.response)
    return checkForUnauthorizedRequest(error, thunkAPI)
  }
}

export const showStatsThunk = async (_, thunkAPI) => {
  try {
    const response = await customFetch.get('/jobs/stats')
    return response.data
  } catch (error) {
    console.log(error.response)
    return checkForUnauthorizedRequest(error, thunkAPI)
  }
}
