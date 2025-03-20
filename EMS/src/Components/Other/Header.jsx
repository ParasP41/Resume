import React from 'react'

export default function Header() {
  return (
    <div className='flex item-end justify-between'>
      <h1 className='text-white text-2xl font-medium' >Hello <br /><span className='text-4xl font-bold'>Paras 👏</span></h1>
      <button className='bg-red-500 text-white font-medium px-5 h-[3rem] text-lg rounded-sm '>Log Out </button>
    </div>
  )
}
