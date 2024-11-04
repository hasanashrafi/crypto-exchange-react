import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Swipper({ coins }) {
    return (
        <div className='min-w-full   rounded-md my-5 flex items-center'>
            <Swiper
                spaceBetween={5}
                slidesPerView={1} // Default for small screens
                breakpoints={{
                    640: {
                        slidesPerView: 2, // For medium screens
                    },
                    768: {
                        slidesPerView: 3, // For larger screens
                    },
                }}
                className='flex w-full p-5'>
                {coins.map(coin => (
                    <SwiperSlide key={coin.id} style={{ width: "fit-content" }}
                        className='w-fit shadow-md  dark:bg-slate-700 bg-slate-300 rounded-lg m-2 text-center p-2'>
                        <div className='w-48 mx-auto flex items-center justify-between'>
                            <img src={coin.image} className=' w-12 rounded-full' alt={coin.name} />
                            <p className='text-black dark:text-white'>
                                {coin.current_price} $
                            </p>
                            <p className={`${coin.price_change_percentage_24h >= 0 ? "text-green-600" : "text-red-600"}`}>
                                {coin.price_change_percentage_24h.toFixed(2)} %
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div >
    );
}

export default Swipper;
