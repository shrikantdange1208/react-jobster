import React from 'react'
import { BigSidebarWrapper } from '../assets/wrappers/BigSidebarWrapper'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar } from '../features/user/userSlice'
import Logo from './Logo'
import NavLinks from './NavLinks'

const BigSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user)

  return (
    <BigSidebarWrapper>
      <div
        className={
          isSidebarOpen ? 'sidebar-container' : 'sidebar-container show-sidebar'
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <div className="nav-links">
            <NavLinks />
          </div>
        </div>
      </div>
    </BigSidebarWrapper>
  )
}

export default BigSidebar
