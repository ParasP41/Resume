import React, { useState } from 'react'
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai'
export default function() {
    const [nav,setNav]=useState(false)

    const toggleNav=()=>{
        setNav(!nav)
    }
  return (
    <>
    <div className='bg-black border border-gray-700 h-[100px] md:w-auto  md:px-26 text-gray-400  flex items-center justify-between'>
        <h1 className='md:text-4xl text-3xl font-bold  primary-color ml-4'>Portfolio</h1>
        <ul className='hidden md:flex'>
            <li className='p-8  hover:underline hover:underline-offset-3 text-md font-semibold'><a href="">Home</a></li>
            <li className='p-8  hover:underline hover:underline-offset-3 text-md font-semibold'><a href="">About</a></li>
            <li className='p-8  hover:underline hover:underline-offset-3 text-md font-semibold'><a href="">Work</a></li>
            <li className='p-8  hover:underline hover:underline-offset-3 text-md font-semibold'><a href="">Contact Me</a></li>
        </ul>
        <div onClick={toggleNav} className='block mr-6 md:hidden'>
            {nav ? <AiOutlineClose size={20}/>: <AiOutlineMenu size={20}/>}
        </div>
        <div className={nav ? 'fixed h-full left-0 top-0 w-[60%] bg-gray-900 ease-in-out duration-500': 'fixed left-[100%]'}>
            <h1 className='text-3xl primary-color m-4'>Portfolio</h1>
            <ul className='p-8 text-2xl'>
                <li className='p-2 '><a href="">Home</a></li>
                <li className='p-2 '><a href="">About</a></li>
                <li className='p-2 '><a href="">Work</a></li>
                <li className='p-2 '><a href="">Contact Me</a></li>
            </ul>
        </div>
    </div>

      
    </>
  )
}
