import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';

function Swipper({ coins }) {
    return (
        <div className='min-w-full h-36 shadow-xl rounded-md my-5 flex items-center'>
            <Swiper
                spaceBetween={10}
                slidesPerView={3}
                centeredSlides={false}
                className='flex p-5 '>
                {coins.map(coin =>
                    <SwiperSlide key={coin.id}
                        className=' h-24 dark:bg-slate-700 bg-slate-300 rounded-lg m-2 text-center p-2' >
                        <div className='w-full  flex items-center justify-between'>
                            <img src={coin.image} className='relative w-12 m-2 rounded-full' />
                            <p className='text-black dark:text-white'>{coin.current_price} $</p>
                            <p className={`${coin.price_change_percentage_24h >= 0 ? "text-green-600" : "text-red-600"} `}>
                                {coin.price_change_percentage_24h.toFixed(2)} %
                            </p>
                        </div>
                    </SwiperSlide>)}
            </Swiper>


        </div>
    )
}

export default Swipper