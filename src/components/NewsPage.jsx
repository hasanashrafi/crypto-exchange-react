import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

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
        <div className='w-full flex items-center h-96'>
            <Swiper spaceBetween={200} slidesPerView={2}>
                {news && news.map((i) => (
                    <SwiperSlide key={i.id}>
                        <div className='w-96 p-4 border rounded-lg shadow-lg '>
                            <p className='text-lg font-bold text-black text-wrap my-2'>{i.title}</p>
                            <img src={i.image_url} className='w-full h-56 rounded-md' alt={i.title} />
                            <button className='mt-2 bg-green-500 text-white py-1 px-3 rounded'>Read More</button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default NewsPage;
