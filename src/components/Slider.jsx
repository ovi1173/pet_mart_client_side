import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import i1 from '../assets/1.jpg';
import i2 from '../assets/Happy-Pet-Owner-0324.webp';
import i33 from '../assets/SPCA-Dogs-for-Adoption.jpg';
const Slider = () => {
    return (
        <>
            <Swiper
                pagination={{ type: "fraction" }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div className="relative">
                        <img
                            className="w-full h-[450px] rounded-3xl p-3 object-cover"
                            src={i1}
                            alt=""
                        />

                        {/* PROFESSIONAL CENTER TAGLINE */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent
                      flex items-center justify-center rounded-3xl p-3">
                            <h2 className="text-white text-3xl font-bold text-center drop-shadow-xl">
                                Find Your Furry Friend Today!
                            </h2>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div className="relative">
                        <img
                            className="w-full h-[450px] rounded-3xl p-3 object-cover"
                            src={i2}
                            alt=""
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent
                      flex items-center justify-center rounded-3xl p-3">
                            <h2 className="text-white text-3xl font-bold text-center drop-shadow-xl">
                                Adopt, Don’t Shop — Give a Pet a Home.
                            </h2>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                    <div className="relative">
                        <img
                            className="w-full h-[450px] rounded-3xl p-3 object-cover"
                            src={i33}
                            alt=""
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent
                      flex items-center justify-center rounded-3xl p-3">
                            <h2 className="text-white text-3xl font-bold text-center drop-shadow-xl">
                                Because Every Pet Deserves Love and Care.
                            </h2>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>


        </>
    );
};

export default Slider;