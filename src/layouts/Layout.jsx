import React from 'react'

function Layout({ children }) {
    return (
        <div >
            <header className='flex justify-between p-2 bg-blue-600 text-white items-center'>
                <p className='text-lg'>Crypto News</p>
                <a href="#" className='bg-white rounded m-2 p-1 px-2 text-blue-700 hover:bg-blue-100 transition-all ease-in-out'>Github</a>
            </header>
            {children}
            <footer className='p-2 bg-blue-600'>
                <p className='text-center'>Developed By HsN</p>
            </footer>
        </div>
    )
}

export default Layout