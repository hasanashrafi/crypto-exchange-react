import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Loader from './modules/Loader';

function NewsPage() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const getNews = async () => {
            const res = await fetch("https://api.polygon.io/v2/reference/news?limit=20&apiKey=QJWakz5ulqJCIquBnrC57b_wJQVSWEwI");
            const data = await res.json();
            setNews(data.results);
        };
        getNews();
    }, []);

    return (
        <>
            <p className='text-center text-black font-extrabold text-2xl dark:text-white'>Crypto News</p>
            <div className=' my-5 p-2  w-full flex items-center h-96 dark:text-white'>
                {news?.length ? (

                    <Swiper
                        spaceBetween={10}
                        slidesPerView={1} // Default for small screens
                        breakpoints={{
                            640: {
                                slidesPerView: 2, // For medium screens
                            },
                            768: {
                                slidesPerView: 3, // For larger screens
                            },
                        }}>
                        {news && news.map((i) => (
                            <SwiperSlide key={i.id} style={{ width: "318px" }}
                                className='responsive-slide'>
                                <div className='w-full h-80 overflow-hidden p-4 border rounded-lg shadow-lg '>
                                    <p className='text-sm font-semibold dark:text-white text-black text-wrap my-2'>{i.title}</p>
                                    <img src={i.image_url} className=' w-full h-48   rounded-md' alt={i.title} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>) : (
                    <div className='flex items-center justify-center  w-full  text-center'>
                        <Loader />
                    </div>
                )}
            </div>
        </>
    );
}

export default NewsPage;
