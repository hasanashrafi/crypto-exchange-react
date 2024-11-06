import React from 'react';
import TableRow from './TableRow';

function TableCoin({ coins ,currency,setChart}) {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full">
                <thead>
                    <tr className="bg-gray-300 rounded">
                        <th className="p-4 text-gray-600">Name</th>
                        <th className="p-4 text-gray-600">Symbol</th>
                        <th className="p-4 text-gray-600">Price</th>
                        <th className="p-4 text-gray-600">Market Cap</th>
                        <th className="p-4 text-gray-600">24h Change</th>
                        <th className="p-4 text-gray-600">Chart</th>
                    </tr>
                </thead>
                <tbody>
                    {coins.map((coin) => (
                        <TableRow
                         key={coin.id}
                          coin={coin} 
                          currency={currency}
                          setChart={setChart}
                          />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TableCoin;
