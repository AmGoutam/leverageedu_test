import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./FeaturedAcross.css"
import { newsItems } from '../../../Data/newsItems';
const FeaturedAcross = () => {

    return (
        <section>
            <div className="container my-5 p-5 FeaturedAcross">
                <p className='para'>In the Press</p>
                <h1><span>Featured <div></div></span> Across</h1>
                <div className='row'>
                    <Swiper
                        modules={[ Navigation, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={3}
                        navigation
                        // autoplay={{ delay: 3000 }}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 }

                        }}
                        className="mySwiper"
                    >
                        {newsItems.map((item, index) => (
                            <SwiperSlide key={index} >
                                <div className="card h-100 shadow-sm border-0" style={{ background: "transparent" }}>
                                    <div className="card-body">
                                        <p className="card-text">{item.title}</p>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="d-flex justify-content-between align-items-center p-3">
                                        <img src={item.logo} alt={item.source} height="24" />
                                        <a href={item.link} className="text-primary text-decoration-none">Read More</a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default FeaturedAcross