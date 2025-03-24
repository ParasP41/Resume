import React, { useState } from "react";
import { MdDelete, MdFileDownload } from "react-icons/md";
import { MdCancel } from "react-icons/md";

export default function Card() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div  className="cursor-pointer w-full border-1 md:min-w-[500px] max-w-[500px] bg-black break-inside-avoid">
                <div onClick={() => setIsModalOpen(true)} className="relative block p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h2 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-gray-400">
                        {title || "Title"}
                    </h2>
                   
                    <p className="text-black dark:text-gray-400">
                        {description || "Note"}
                    </p>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center md:mb-70 mb-40 backdrop-blur-sm bg-opacity-50 z-50">
                    <div className="relative p-6  bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 md:w-155 w-96">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                        >
                            <MdCancel  className="w-5 h-5" />

                        </button>

                        <input
                            className="mb-2 text-2xl font-bold outline-none tracking-tight text-black dark:text-white w-full p-2 bg-transparent"
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            aria-label="Title"
                        />
                        <input
                            className="font-normal text-black outline-none dark:text-gray-400 w-full p-2 bg-transparent"
                            type="text"
                            placeholder="Note"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            aria-label="Note"
                        />
                        <div className="absolute bottom-2 right-2 flex space-x-2">
                            <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                                <MdDelete className="w-5 h-5 " />
                            </button>
                            <button className="p-2 rounded-full text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 ">
                                <MdFileDownload className="w-5 h-5 " />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
