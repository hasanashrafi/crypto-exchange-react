import React, { useEffect, useState } from 'react'
import TableCoin from '../modules/TableCoin';
import { api_key, getCoinList } from '../../services/cryptoApi';

function HomePage() {
    const [coins, setCoins] = useState([])

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: { accept: 'application/json', 'x-cg-demo-api-key': `${api_key}` }
        };

        fetch(getCoinList(), options)
            .then((res) => res.json())
            .then((json) => setCoins(json))
            .catch((err) => console.error(err));
    }, [])
    
    return (
        <div className='mx-auto p-2'>
            <TableCoin coins={coins} />
        </div>

    )
}

export default HomePage