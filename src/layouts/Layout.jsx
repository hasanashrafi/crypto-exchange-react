import React, { useState } from 'react'
import { BiMoon, BiSun } from 'react-icons/bi'

function Layout({ children }) {
    const [dark, setIsDark] = useState(false)

    const darkHandler = () => {
        setIsDark(!dark);
        if (!dark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }
    return (
        <div className='' >
            <header className='flex justify-between p-2 px-5 dark:bg-gray-800 bg-blue-600 text-white items-center'>
                <p className='text-lg'>Crypto </p>
                <div className='flex items-center'>
                    <button onClick={darkHandler} className='m-2 text-3xl'>
                        {
                            dark
                                ?
                                <BiSun className='' />
                                :
                                <BiMoon className='' />
                        }
                    </button>
                    <a href="#" className='bg-white rounded m-2 p-1 px-2  text-blue-700 hover:bg-blue-100 transition-all ease-in-out'>Github</a>
                </div>
            </header>
            {children}
            <footer className=' dark:bg-gray-800 p-2 bg-blue-600'>
                <p className='text-center'>Developed By HsN</p>
            </footer>
        </div>
    )
}

export default Layout