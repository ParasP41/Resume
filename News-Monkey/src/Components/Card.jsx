import React from 'react'
export default function Card({pic,heading,source,detail,date,title,link}) {
    return (
        <>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <img className="rounded-t-lg" src={pic} alt="" />
                <div className="p-5">
                        <h5 className="mb-2 text-[19px] text-blue-600 font-bold tracking-tight dark:text-blue-400">By-{(heading).slice(0,23)}..</h5>
                        <h5 className="mb-2 text-[19px] text-blue-600 font-bold tracking-tight dark:text-blue-400">Source-{(source).slice(0,23)}..</h5>
                        <h5 className="mb-2 text-[19px] text-blue-600 font-bold tracking-tight dark:text-blue-400">{new Date(date).toGMTString().slice(0,26)}</h5>
                        <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h6>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{detail}</p>
                    <a href={link} target='blank' className="inline-flex items-center px-3 py-2 text-sm font-medium text-centertext-white text-white bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg hover:bg-gradient-to-bl cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div>



        </>
    )
}
