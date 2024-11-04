import React, { useEffect, useState } from 'react';
import TableCoin from '../modules/TableCoin';
import { getCoinList } from '../../services/cryptoApi';
import Swipper from '../modules/Swipper';
import NewsPage from '../NewsPage';
import Loader from '../modules/Loader';
import Pagination from '../modules/Pagination';
import Search from '../modules/Search';

function HomePage() {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true); // Set initial loading state to true
    const [page, setPage] = useState(1)
    const [currency, setCurrency] = useState('usd')

    useEffect(() => {
        setLoading(true)
        const getData = async () => {
            try {
                const response = await fetch(getCoinList(page,currency));
                const data = await response.json();
                setCoins(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false); // Ensure loading is set to false after data fetch
            }
        };
        getData();
    }, [page,currency]);

    return (
        <div className='mx-auto p-2'>
            {loading ? (
                <div className='flex items-center justify-center h-screen w-full text-center'>
                    <Loader />
                </div>
            ) : (
                <>
                    <NewsPage />
                    <Swipper coins={coins} />
                    <Search currency={currency} setCurrency={setCurrency} />
                    <TableCoin coins={coins} currency={currency} />
                    <Pagination page={page} setPage={setPage} />
                </>
            )}
        </div>
    );
}

export default HomePage;
