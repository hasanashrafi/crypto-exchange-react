import React, { useEffect, useState } from 'react'
import TableCoin from '../modules/TableCoin';
import { getCoinList } from '../../services/cryptoApi';
import Swipper from '../modules/Swipper';
import NewsPage from '../NewsPage';
import { LineWave } from 'react-loader-spinner';

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
                <LineWave
                    visible={true}
                    height="100"
                    width="100"
                    color="#4fa94d"
                    ariaLabel="line-wave-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    firstLineColor=""
                    middleLineColor="#fdf9"
                    lastLineColor=""
                    
                />) :
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