import React from 'react'

export default function TaskListNumbers() {
  return (
    <div className='flex justify-between mt-10 gap-5 screen'>
      <div className=' rounded-xl w-[45%] bg-red-400 py-7 px-9'>
        <h2 className='text-3xl text-white font-bold '>0</h2>
        <h3 className='text-xl text-white font-bold'>New task</h3>
      </div>
      <div className=' rounded-xl w-[45%] bg-blue-400 py-7 px-9'>
        <h2 className='text-3xl text-white font-bold '>0</h2>
        <h3 className='text-xl text-white font-bold'>New task</h3>
      </div>
      <div className=' rounded-xl w-[45%] bg-green-400 py-7 px-9'>
        <h2 className='text-3xl text-white font-bold '>0</h2>
        <h3 className='text-xl text-white font-bold'>New task</h3>
      </div>
      <div className=' rounded-xl w-[45%] bg-yellow-400 py-7 px-9'>
        <h2 className='text-3xl text-white font-bold '>0</h2>
        <h3 className='text-xl text-white font-bold'>New task</h3>
      </div>
    </div>
  )
}
