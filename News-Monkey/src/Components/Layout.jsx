import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import SideBar from './SideBar'
export default function Layout() {
  return (
    <>
      <Navbar/>
      <SideBar/>
      <Outlet />
    </>
  )
}
