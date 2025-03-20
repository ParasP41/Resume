import React from 'react'
import Header from '../Other/Header'
import CreateTask from '../Other/CreateTask'
import AllTask from '../Other/AllTask'
export default function AdminDashboard() {
  return (
    <div className=' h-screen w-full p-10 ' >
      <Header />
      <CreateTask/>
      <AllTask/>
    </div>
  )
}
