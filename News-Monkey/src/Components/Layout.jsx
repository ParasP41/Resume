import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import SideBar from './SideBar'
import { initFlowbite } from 'flowbite'
export default function Layout() {
  return (
    <>
      <Navbar/>
      <SideBar/>
      <Outlet />
    </>
  )
}
