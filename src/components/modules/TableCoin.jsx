import React from 'react';
import TableRow from './TableRow';

function TableCoin({ coins }) {
   
    return (
        <table className="min-w-full ">
            <thead className=''>
                <tr className="bg-gray-300 rounded ">
                    <th className="p-4  text-gray-600 ">Name</th>
                    <th className="p-4  text-gray-600">Symbol</th>
                    <th className="p-4  text-gray-600">Price</th>
                    <th className="p-4  text-gray-600">Market Cap</th>
                    <th className="p-4  text-gray-600">24h Change</th>
                    <th className="p-4  text-gray-600">Chart</th>
                </tr>
            </thead>
            <tbody className=''>
                {
                    coins.map((coin) =>
                        <TableRow
                            key={coin.id}
                            coin={coin} />
                    )
                }
            </tbody>
        </table>
    );
}

export default TableCoin;
