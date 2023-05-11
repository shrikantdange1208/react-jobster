import customFetch, { checkForUnauthorizedRequest } from '../../utils/axios'
import { clearAllJobsState } from '../allJobs/allJobsSlice'
import { clearValues } from '../job/jobSlice'
import { logoutUser } from './userSlice'

export const registerUserThunk = async (url, user, thunkAPI) => {
  try {
    const response = await customFetch.post(url, user)
    return response.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}

export const loginUserThunk = async (url, user, thunkAPI) => {
  try {
    const response = await customFetch.post('/auth/login', user)
    return response.data
  } catch (error) {
    thunkAPI.rejectWithValue(error.response.data.msg)
  }
}

export const updateUserThunk = async (url, user, thunkAPI) => {
  try {
    const response = await customFetch.patch('/auth/updateUser', user)
    return response.data
  } catch (error) {
    console.log(error.response)
    return checkForUnauthorizedRequest(error, thunkAPI)
  }
}

export const clearStoreThunk = async (message, thunkAPI) => {
  try {
    /* logout user */
    thunkAPI.dispatch(logoutUser(message))

    /* clear job store */
    thunkAPI.dispatch(clearValues())

    /* clear all jobs */
    thunkAPI.dispatch(clearAllJobsState())
    return Promise.resolve()
  } catch (error) {
    return Promise.reject()
  }
}
