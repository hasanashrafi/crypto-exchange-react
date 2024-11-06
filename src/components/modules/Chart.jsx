import { useState } from "react"
import { CgClose } from "react-icons/cg"
import { convertData } from "../../helper/convertData"
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

function Chart({ chart, setChart }) {
    const [type, setType] = useState('prices')

    const closeChartHandler = () => {
        setChart(false)
    }

    return (
        <div className="fixed w-full z-50  p-5 top-0 left-0 backdrop-blur-sm h-full  bg-gray-700/30 dark:bg-gray-900/30 text-black">
            <div className="w-full h-[100%]  p-4  mx-auto  bg-white/70  rounded">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-2 m-2">
                        <img src={chart.coin.image} className="size-7 rounded-full" />
                        <p>{chart.coin.name}</p>
                    </div>
                    <button onClick={closeChartHandler}>
                        <CgClose className="text-white bg-red-600 transition-all ease-in-out border rounded-full p-0.5 border-red-500 hover:text-red-300 text-2xl m-2" />
                    </button>

                </div>
                <ChartComponent data={convertData(chart, type)} type={type} />

                <div className="flex flex-wrap justify-center items-center w-full">
                    <button onClick={() => setType("prices")}
                        className="w-36 border border-blue-600 m-1 p-0.5 px-1 rounded text-blue-600 hover:bg-blue-600 hover:text-white transition-all ease-in-out">Prices</button>
                    <button onClick={() => setType("market_caps")}
                        className="w-36 border border-blue-600 m-1 p-0.5 px-1 rounded text-blue-600 hover:bg-blue-600 hover:text-white transition-all ease-in-out">MarketCaps</button>
                    <button onClick={() => setType("total_volumes")}
                        className="w-36 border border-blue-600 m-1 p-0.5 px-1 rounded text-blue-600 hover:bg-blue-600 hover:text-white transition-all ease-in-out">Total Volumes</button>

                </div>
                <div className="my-2 font-semibold text-blue-800 flex flex-wrap justify-center">
                    <div className="m-2 border-b-2 border-blue-600">
                        <p>Price: {chart.coin.current_price.toLocaleString()}</p>
                    </div>
                    <div className="m-2 border-b-2 border-blue-600">
                        <p>ATH: {chart.coin.ath.toLocaleString()}</p>
                    </div>
                    <div className="m-2 border-b-2 border-blue-600">
                        <p>Market Cap: {chart.coin.market_cap.toLocaleString()}</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Chart

const ChartComponent = ({ data, type }) => {
    return (

        <ResponsiveContainer style={{ margin: "auto" }} width="90%" height="70%" >
            <LineChart

                data={data}>
                <Line
                    type="monotone"
                    dataKey={type}
                    strokeWidth='2px'
                    stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <YAxis dataKey={type} style={{ fontSize: "8px" }} domain={["auto", "auto"]} />
                <XAxis dataKey="date" hide />
                <Legend />
                <Tooltip />
            </LineChart>
        </ResponsiveContainer>

    )
}

