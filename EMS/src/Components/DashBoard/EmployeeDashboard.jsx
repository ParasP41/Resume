import React from 'react'
import Header from '../Other/Header'
import TaskListNumbers from '../Other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'
export default function EmployeeDashboard() {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen w-screen'>
    <Header/>
    <TaskListNumbers/>
    <TaskList/>
    </div>
  )
}
