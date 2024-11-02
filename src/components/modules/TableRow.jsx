import React from 'react'
import { formatNumber } from '../../utils/numberFormatter';

function TableRow({ coin }) {
    console.log(coin)
    const {
        id,
        name,
        symbol,
        image,
        current_price,
        price_change_percentage_24h,
        total_volume,
    } = coin;

    return (
        <tr className='w-full text-blue-900 border-b-2  text-center'>
            <td className='p-2 my-2'>
                <div className='flex items-center  gap-x-3 px-3 my-3 text-center ju'>
                    <img src={image} className='w-7 '/>
                    <p className='text-lg  font-semibold'>{name}</p>
                </div>
            </td>
            <td>{formatNumber(current_price)}</td>
            <td>{formatNumber(total_volume)}</td>
            <td>{price_change_percentage_24h.toFixed(2)}</td>
        </tr>
    )
}

export default TableRow