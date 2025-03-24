import React from 'react'
import { Link } from 'react-router-dom';
import { MdSportsVolleyball } from "react-icons/md";
import { SiGeneralmotors } from "react-icons/si";
import { SiDcentertainment } from "react-icons/si";
import { MdOutlineScience } from "react-icons/md";
import { IoBusiness } from "react-icons/io5";
import { GiHealthPotion } from "react-icons/gi";

export default function SideBar() {
    const a = document.querySelector('html');
    const [mode, setMode] = React.useState(a.classList.contains('dark') ? 'dark' : 'light');

    const handlerMode = () => {
        if (mode === 'light') {
            a.classList.remove('light');
            a.classList.add('dark');
            setMode('dark');
        } else if (mode === 'dark') {
            a.classList.remove('dark');
            a.classList.add('light');
            setMode('light');
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link to="/general" onClick={scrollToTop} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <SiGeneralmotors className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                                <span className="ms-3">General</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/sports" onClick={scrollToTop} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <  MdSportsVolleyball className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                                <span className="ms-3">Sports</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/entertainment" onClick={scrollToTop} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <SiDcentertainment className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />

                                <span className="flex-1 ms-3 whitespace-nowrap">Entertainment</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/science" onClick={scrollToTop} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <MdOutlineScience className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />

                                <span className="flex-1 ms-3 whitespace-nowrap">Science</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/business" onClick={scrollToTop} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <IoBusiness className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />

                                <span className="flex-1 ms-3 whitespace-nowrap">Business</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/health" onClick={scrollToTop} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <GiHealthPotion className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                                <span className="flex-1 ms-3 whitespace-nowrap">Health</span>
                            </Link>
                        </li>
                        <label onChange={handlerMode} onClick={scrollToTop} className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{mode}</span>
                        </label>
                    </ul>
                    <div id="dropdown-cta" className="p-4 mt-6 rounded-lg bg-blue-50 dark:bg-blue-900" role="alert">
                        <div className="flex items-center mb-3">
                            <span className="bg-orange-100 text-orange-800 text-sm font-semibold me-2 px-2.5 py-0.5 rounded-sm dark:bg-orange-200 dark:text-orange-900">News-Monkey</span>
                            <button type="button" className="ms-auto -mx-1.5 -my-1.5 bg-blue-50 inline-flex justify-center items-center w-6 h-6 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800" data-dismiss-target="#dropdown-cta" aria-label="Close">
                                <span className="sr-only">Close</span>
                            </button>
                        </div>
                        <p className="mb-3 text-sm text-blue-800 dark:text-blue-400">
                            New Monkey is a real-time news app that keeps you updated with the latest headlines from various categories, including Sports , Entertainment , Health etc . Built with React, it delivers up-to-the-minute news, ensuring you stay informed with breaking stories as they happen. Whether you're tracking global markets or the latest trends, New Money brings you reliable news at your fingertips.
                        </p>
                    </div>
                </div>
            </aside>


        </>
    )
}
