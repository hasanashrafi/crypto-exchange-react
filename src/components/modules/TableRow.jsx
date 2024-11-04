import React from 'react'
import { formatNumber } from '../../utils/numberFormatter';
import chartDown from "../../assets/chart-down.svg"
import chartUp from "../../assets/chart-up.svg"
import { PiCurrencyJpy } from 'react-icons/pi';
import { FaEuroSign } from 'react-icons/fa';
function TableRow({ coin, currency }) {

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
        <tr className='w-full dark:text-white text-blue-900 border-b-2  text-center'>
            <td className='p-2 my-2'>
                <div className='flex items-center  gap-x-3 px-3 my-3 text-center ju'>
                    <img src={image} className='w-7 rounded-full' />
                    <p className='text-lg  font-semibold'>{name}</p>
                </div>
            </td>
            <td className='text-gray-500'>
                {symbol.toUpperCase()}
            </td>
            <td className='text-center'>
                <div className='flex items-center gap-x-1 mx-auto justify-center'>
                {currency === "usd" ? " $ " : null || currency === "eur" ? <FaEuroSign /> : null || currency === "jpy" ? <PiCurrencyJpy /> : null}
                {formatNumber(current_price)}
                </div>
            </td>
            <td className='text-blue-500 text-center   '>
            <div className='flex items-center gap-x-1 justify-center mx-auto'>

{currency === "usd" ? " $ " : null || currency === "eur" ? <FaEuroSign /> : null || currency === "jpy" ? <PiCurrencyJpy /> : null}
                 {formatNumber(total_volume)}
</div>
            </td>
            <td className={`${price_change_percentage_24h >= 0 ? "text-green-600" : "text-red-600"}`}>
                {price_change_percentage_24h.toFixed(2)} %
            </td>
            <td className='' >
                {
                    <img className='mx-auto' src={price_change_percentage_24h > 0 ? chartUp : chartDown} />
                }
            </td>
        </tr>
    )
}

export default TableRow