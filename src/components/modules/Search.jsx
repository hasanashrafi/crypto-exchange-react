import React, { useEffect, useState } from 'react';
import { searchCoin } from '../../services/cryptoApi';
import Loader from './Loader';

function Search({ currency, setCurrency }) {
    const [text, setText] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController()

        if (!text) setSearchResults([])
        if (!text) return;
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(searchCoin(text), { signal: controller.signal });
                const json = await response.json();
                setSearchResults(json.coins);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
        return () => controller.abort()
    }, [text]);



    const currencyHandler = (e) => {
        setCurrency(e.target.value.toLowerCase());
    };

    return (
        <div className='w-full p-4 mb-10 text-center'>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                className='border border-blue-500 p-1 rounded-md m-2 outline-none text-blue-600'
                type="text"
                placeholder='Search'
            />
            <select
                value={currency}
                onChange={currencyHandler}
                className='bg-blue-600 dark:bg-blue-950 border p-1.5 rounded-md text-white outline-none'>
                <option value='usd'>USD</option>
                <option value='eur'>EUR</option>
                <option value='jpy'>JPY</option>
            </select>

            {loading ? (
                <div className="flex justify-center w-full">
                    <Loader className='w-full mx-auto mt-5 ' />
                </div>
            ) : (
                searchResults.length > 0 && (
                    <div className=' rounded  mx-auto grid grid-cols-4 mt-5'>
                        {searchResults.map((coin) => (
                            <div key={coin.id} className='flex my-2  text-black dark:text-white  items-center justify-center p-2 border-b'>
                                <img src={coin.thumb} alt={coin.name}
                                 className='size-6 mr-1 rounded-full' />
                                <div className=''>
                                    <h3 className='text-sm'>{coin.symbol}</h3>

                                </div>
                            </div>
                        ))}
                    </div>
                )
            )}
        </div>
    );
}

export default Search;
