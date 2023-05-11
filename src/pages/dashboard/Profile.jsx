import React, { useState } from 'react'
import { DashboardFormPageWrapper } from '../../assets/wrappers/DashboardFormPageWrapper'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { FormRow } from '../../components'
import { updateUser } from '../../features/user/userSlice'

const Profile = () => {
  const { isLoading, user } = useSelector((store) => store.user)
  const dispatch = useDispatch()

  const [userData, setUserData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    lastName: user?.lastName || '',
    location: user?.location || '',
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    const { name, email, lastName, location } = userData
    if (!name || !email || !lastName || !location) {
      toast.error('Please fill all the fields')
      return
    }
    dispatch(updateUser(userData))
  }

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setUserData({ ...userData, [name]: value })
  }

  return (
    <DashboardFormPageWrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>profile</h3>
        <div className="form-center">
          <FormRow
            type="text"
            name="name"
            value={userData.name}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="lastName"
            value={userData.lastName}
            handleChange={handleChange}
            labelText="last name"
          />
          <FormRow
            type="email"
            name="email"
            value={userData.email}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="location"
            value={userData.location}
            handleChange={handleChange}
          />
          <button type="submit" className="btn btn-block" disabled={isLoading}>
            {isLoading ? 'Please wait...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </DashboardFormPageWrapper>
  )
}

export default Profile
