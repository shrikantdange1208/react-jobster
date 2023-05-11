import React, { useState } from 'react'
import { NavbarWrapper } from '../assets/wrappers/NavbarWrapper'
import {
  FaAlignCenter,
  FaUserCircle,
  FaCaretDown,
  FaAlignLeft,
} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import Logo from './Logo'
import {
  clearStore,
  logoutUser,
  toggleSidebar,
} from '../features/user/userSlice'
const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false)
  const { user } = useSelector((store) => store.user)
  const dispatch = useDispatch()

  const toggle = () => {
    dispatch(toggleSidebar())
  }
  return (
    <NavbarWrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggle}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
            <button
              type="button"
              className="dropdown-btn"
              onClick={() => dispatch(clearStore('Logout successful ...'))}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </NavbarWrapper>
  )
}

export default Navbar
