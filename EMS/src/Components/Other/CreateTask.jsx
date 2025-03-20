import React from 'react'

export default function CreateTask() {
  return (
    <div>
      <div className='p-5 bg-[#1c1c1c] mt-7 rounded '>
        <form className='text-white flex-wrap flex w-full items-start justify-between'  >
         <div className='w-1/2'>
         <div>
            <h3 className='text-sm text-grey-300 mb-0.5' >Task Title</h3>
            <input  type="text" className='bg-transparent text-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] border-grey-400 mb-4 ' placeholder='Make a ui Design' />
          </div>
          
          <div>
            <h3 className='text-sm text-grey-300 mb-0.5' >Date</h3>
            <input  type="date" className='bg-transparent text-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] border-grey-400 mb-4 ' />
          </div>
          <div>
            <h3 className='text-sm text-grey-300 mb-0.5' >Assign to</h3>
            <input  type="text" className='bg-transparent text-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] border-grey-400 mb-4 ' placeholder='employee name' />
          </div>
          <div>
            <h3 className='text-sm text-grey-300 mb-0.5' >Category</h3>
            <input  type="text" className='bg-transparent text-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] border-grey-400 mb-4 '  placeholder='design dev etc' />
          </div>
         </div>
         
          <div className='w-2/5 flex flex-col items-start '>
            <h3 className='text-sm text-grey-300 mb-0.5' >Description</h3>
            <textarea name="" id="" className=' w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-grey-400' rows="10" cols="40"></textarea>
          <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Cretate task</button>
          </div>
        </form>
      </div>
    </div>
  )
}
