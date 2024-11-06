import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import TableCoin from '../modules/TableCoin';
import { getCoinList } from '../../services/cryptoApi';
import Swipper from '../modules/Swipper';
import NewsPage from '../NewsPage';
import Loader from '../modules/Loader';
import Pagination from '../modules/Pagination';
import Search from '../modules/Search';
import Chart from '../modules/Chart';

function HomePage() {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [currency, setCurrency] = useState('usd');
    const [chart, setChart] = useState(null);

    useEffect(() => {
        setLoading(true);
        const getData = async () => {
            try {
                const response = await fetch(getCoinList(page, currency));
                const data = await response.json();
                setCoins(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, [page, currency]);

    return (
        <div className='mx-auto p-2'>
            {loading ? (
                <div className='flex items-center justify-center h-screen w-full text-center'>
                    <Loader />
                </div>
            ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                    <Search currency={currency} setCurrency={setCurrency} />
                    <NewsPage />
                    <Swipper coins={coins} />
                    {!!chart && <Chart chart={chart} setChart={setChart} />}
                    <TableCoin coins={coins} currency={currency} setChart={setChart} />
                    <Pagination page={page} setPage={setPage} />
                </motion.div>
            )}
        </div>
    );
}

export default HomePage;
