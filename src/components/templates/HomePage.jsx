import React, { useEffect, useState } from 'react';
import TableCoin from '../modules/TableCoin';
import { getCoinList } from '../../services/cryptoApi';
import Swipper from '../modules/Swipper';
import NewsPage from '../NewsPage';
import Loader from '../modules/Loader';

function HomePage() {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true); // Set initial loading state to true

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(getCoinList());
                const data = await response.json();
                setCoins(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false); // Ensure loading is set to false after data fetch
            }
        };
        getData();
    }, []);

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
                    <TableCoin coins={coins} />
                </>
            )}
        </div>
    );
}

export default HomePage;
