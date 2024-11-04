import React from 'react'
import { LineWave } from 'react-loader-spinner'

function Loader() {
  return (
    <LineWave
    visible={true}
    height="100"
    width="100"
    color="#4fa94d"
    ariaLabel="line-wave-loading"
    wrapperStyle={{}}
    wrapperClass=""
    firstLineColor=""
    middleLineColor="#ff9"
    lastLineColor=""
    
/>
  )
}

export default Loader