import React, { useEffect, useState } from 'react'
import TableCoin from '../modules/TableCoin';
import { getCoinList } from '../../services/cryptoApi';
import Swipper from '../modules/Swipper';
import NewsPage from '../NewsPage';
import Loader from '../modules/Loader';

function HomePage() {
    const [coins, setCoins] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const getData = async () => {
            const response = await fetch(getCoinList())
            const data = await response.json()
            setLoading(loading => !loading)
            setCoins(data)
        }
        getData()
    }, [])

    return (
        <div className=' mx-auto p-2'>

            {loading ? (
                <div className='flex items-center justify-center h-screen w-full  text-center'>
                    <Loader />
                </div>
            ) :
                (
                    <>

                        <NewsPage />
                        <Swipper coins={coins} />

                        <TableCoin coins={coins} />

                    </>
                )}


        </div>
    )
}

export default HomePage