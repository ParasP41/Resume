import React from 'react'

export default function Contact() {
    return (
        <>
            <div className='sm:py-20 p-5'>
                <div className='text-center'>
                    <h2 className='text-4xl underline decoration-orange-500 underline-offset-10 font-bold leading-tight primary-color'>Contact me</h2>
                </div>
                <div className='max-w-[800px] mx-auto'>
                    <div className='mt-6 bg-[#161616] rounded-xl'>
                        <div className='md:p-10 px-4 py-5'>
                            <form action="https://getform.io/f/bzywqkna" method='post'>
                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4'>
                                    <div>
                                        <div className='mt-2.5 realtive'>
                                            <input type="text" name='name' placeholder='Your name' className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-pink-900 rounded-md outline-1 ' />
                                        </div>
                                    </div>
                                    <div>
                                        <div className='mt-2.5 realtive'>
                                            <input type="email" name="email" placeholder='Your Email' className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-pink-900 rounded-md outline-1 ' />
                                        </div>
                                    </div>
                                    <div className='sm:col-span-2'>
                                        <div className='mt-2.5 realtive'>
                                            <textarea name="" placeholder='Your Message' className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-pink-900 rounded-md outline-1 ' rows={6} id="">
                                            </textarea>
                                        </div>
                                    </div>
                                    <div className='sm:col-span-2'>
                                        <button className='text-xl w-full p-4 mt-2 font-semibold text-white bg-grade rounded-md'>
                                            Send
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
            <footer>
                <div className=' sm:h-[150px] p-10 flex justify-between items-center'>
                    <span className='primary-color text-3xl'>J. Paras</span>
                    <p className='text-gray-600'>parasvp41@gmail.com</p>
                </div>
                
            </footer>
        </>
    )
}
