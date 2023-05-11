import React, { useState } from 'react'
import { SmallSidebarWrapper } from '../assets/wrappers/SmallSidebarWrapper'
import { FaTimes } from 'react-icons/fa'
import Logo from './Logo'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar } from '../features/user/userSlice'
import NavLinks from './NavLinks'

const SmallSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user)
  const dispatch = useDispatch()

  const toggle = () => {
    dispatch(toggleSidebar())
  }

  return (
    <SmallSidebarWrapper>
      <div
        className={
          isSidebarOpen ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className="content">
          <button className="close-btn" onClick={toggle}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks toggleSidebar={toggle} />
        </div>
      </div>
    </SmallSidebarWrapper>
  )
}

export default SmallSidebar
