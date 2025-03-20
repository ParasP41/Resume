import React from 'react'
import aboutpic from '../assets/about.jpg'

import html from '../assets/html.png'
import react from '../assets/react.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
export default function About() {
  return (
    <>
      <div className='text-white  md:mx-8 md:my-6' id='about'>
        <div className='md:grid md:grid-cols-2 sm:py-16 mx-9'>
            <div className='mt-4 md:mt-0 text-left flex h-full'>
                <div className='my-auto md:mx-6'>
                    <h2 className='md:text-6xl text-3xl font-bold mb-4 underline decoration-orange-500 underline-offset-10 primary-color'>About Me</h2>
                    <p className='text-base lg:text-xl'>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ab! At officia illum nihil! Dolores iusto sit nesciunt ea consequatur dolore eaque at, alias dolorem facere magni, facilis illo dolorum placeat. Dignissimos tempora maxime quae doloribus, porro, quasi unde nemo aut, alias rerum autem rem reiciendis quo debitis impedit illo iusto sequi. Ea atque repellendus dicta quod. Molestias id reiciendis quidem ipsum laudantium? Ab tempore, asperiores est aliquam libero minus delectus veritatis in explicabo aut fuga odit similique ad quam fugit ipsa. Fugit consectetur nobis minima expedita. Dolorum obcaecati a consequuntur sapiente, dolores, similique ut sed amet voluptatum quidem perferendis?
                    </p>
                </div>

            </div>
            <img className='mx-auto rounded-3xl py-8 md:py-0' src={aboutpic} alt="" width={350} height={300} />
        </div>
      </div>

      <div className='bg-black mb-6 md:mx-7 mx-2 text-gray-400 md:h-[150px] grid grid-cols-3 place-items-center md:flex md:flex-wrap md:justify-between border rounded-xl border-xl md:items-center md:px-20'>
        <h2 className='text-gray-700 text-2xl md:text-4xl font-bold m-4'>
            My <br /> Teck <br /> Stack
        </h2>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
            <img src={html} alt="" />
            <p className='mt-2'>HTML</p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
            <img src={css} alt="" />
            <p className='mt-2'>CSS</p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
            <img src={javascript} alt="" />
            <p className='mt-2'>JavaScript</p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
            <img src={tailwind} alt="" />
            <p className='mt-2'>Tailwind Css</p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
            <img src={react} alt="" />
            <p className='mt-2'>React JS</p>
        </div>
    </div> 
    </>
  )
}
