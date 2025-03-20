import React from 'react'
import profilepic from '../assets/profilepic.png'
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
export default function Hero() {
  return (
    <>
      <div className='grid  md:mx-7 md:my-8 grid-col-1  sm:grid-cols-3 gap-8 md:h-[70vh] md:py-20 bg-black'>
        <div className='col-span-1  my-10 md:my-0 mx-18 w-auto h-auto lg:w-[400px]'>
          <img src={profilepic} alt="" />
        </div>
        <div className='col-span-2  md:px-40 px-5'>
          <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
            <p className='primary-color'>I'm a</p>
            <span>Web Developer</span>
          </h1>
          <p className='text-white sm:text-lg my-6 lg:text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci amet deleniti numquam ut, illum sapiente!
          </p>
          <div className='my-8'>
            <a className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white' href="">
              Download CV
            </a>
            <a className='px-6 py-3 w-full rounded-xl mr-4 border border-gray-400  hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none' href="">
              Contact
            </a>
          </div>
        </div>
      </div>
      <div className='text-center flex border border-white  my-4 md:my-0 md:mx-10 rounded-2xl p-2 mx-3 md:justify-center '>
        <div className='flex items-center space-x-9 p-2 text-white md:w-320 '>
          <div className='flex items-center gap-2'>
            <a href='' target='blank' className='primary-color text-xl'>LinkedIn</a>
            <BsLinkedin size={30} />
          </div>
          <div className='flex items-center gap-2'>
            <a href='' target='blank' className='primary-color text-xl'>GitHub</a>
           <FaGithubSquare size={30} />
          </div>
          

        </div>
      </div>
    </>
  )
}
