import React from 'react'

function Search({ currency, setCurrency }) {

    const currencyHandler = (e) => {
        return setCurrency(e.target.value)
    }

    return (
        <div className='my-10 text-center'>
            <input className='border border-gray-400 p-1 rounded m-2 outline-none text-black' type="text" placeholder='Search' />
            <select value={currency} onChange={currencyHandler}
                className='bg-gray-600 border p-1 rounded text-white outline-none '>
                <option

                    value='usd'
                    className='outline-none border-none'>
                    USD
                </option>
                <option

                    value='eur'
                    className='outline-none border-none'>
                    EUR
                </option>
                <option

                    value='jpy'
                    className='outline-none border-none'>
                    JPY
                </option>
            </select>

        </div>
    )
}

export default Search