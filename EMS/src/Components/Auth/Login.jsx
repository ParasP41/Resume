import React from 'react'
import { useState } from 'react';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(email, password)
        setEmail("")
        setPassword("")
    }


    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <div className='border-2 border-emerald-600 rounded-xl p-20 '>
                <form onSubmit={(e)=>
                    {
                        submitHandler(e);
                    }
                } className='flex flex-col items-center justify-center'>
                    <input 
                    value={email}
                    onChange={(e)=>
                        {
                            setEmail(e.target.value);
                        }
                    } required className='border-2 outline-none bg-transparent  border-emerald-600 px-3 text-xl py-4  rounded-full' type="email" placeholder='Enter your email' />
                    <input 
                    value={password}
                    onChange={(e)=>
                        {
                           setPassword(e.target.value);
                        }
                     } required className='border-2 mt-4 outline-none bg-transparent  border-emerald-600 px-3 text-xl py-4  rounded-full' type="password" placeholder='Enter your password' />
                    <button className='border-2 mt-4 outline-none   bg-emerald-600 px-3 text-xl py-4 w-[8rem] text-white font-semibold  rounded-full'>Log in</button>
                </form>
            </div>
        </div>
    )
}
