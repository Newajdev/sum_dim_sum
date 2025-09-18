'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Image from 'next/image';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import Container from '../Container';


const ReviewSlid = ({ Children }) => {
    return (
        <>
        <Container>
            {/* Custom Prev Button */}
            <div className="custom-prev absolute left-0 lg:left-64 top-1/2 -translate-y-1/2 z-10 cursor-pointer ">
                <MdKeyboardArrowLeft className="text-7xl text-[#F8F8FF]" />
            </div>

            {/* Custom Next Button */}
            <div className="custom-next absolute right-0 lg:right-64 top-1/2 -translate-y-1/2 z-10 cursor-pointer p-0 ">
                <MdKeyboardArrowRight className="text-7xl text-[#F8F8FF]" />
            </div>



            <Swiper
                cssMode={true}
                navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev"
                }}
                modules={[Navigation]}
                loop={true}
                className="mySwiper"
            >

                <SwiperSlide>
                    <div>
                        <div className={`flex flex-col justify-center items-center gap-y-10 py-[60px] text-white`}>
                            <Image className="w-20 h-20" src={'/assets/client.png'} width={50} height={50} alt="Clients Reviews" />
                            <p className="text-center px-18">Sum Dim Sum is more than just a restaurant—it’s an experience that transports you to the heart of Asian culinary tradition. Each bite is a harmonious blend of flavor, texture, and passion, crafted meticulously to reflect the essence of dim sum culture. The moment you step in, you’re greeted by the comforting aroma of freshly steamed dumplings, the vibrant energy of a bustling kitchen, and the warm smiles of a team dedicated to delivering perfection on every plate.</p>
                            <div className="rating ">
                                <div className="mask mask-star bg-amber-400" aria-label="1 star"></div>
                                <div className="mask mask-star bg-amber-400" aria-label="2 star"></div>
                                <div className="mask mask-star bg-amber-400" aria-label="3 star" aria-current="true"></div>
                                <div className="mask mask-star bg-amber-400" aria-label="4 star"></div>
                                <div className="mask mask-star bg-amber-400" aria-label="5 star"></div>
                            </div>
                        </div>
                        <div>
                            <div className='relative'>
                                <h3 className={`text-3xl lg:text-[60px] absolute bottom-0 -right-20 -translate-x-1/2  text-white/20`}>-Rosario Rosa</h3>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className={`flex flex-col justify-center items-center gap-y-10 py-[60px] text-white`}>
                            <Image className="w-20 h-20" src={'/assets/client.png'} width={50} height={50} alt="Clients Reviews" />
                            <p className="text-center px-18">Sum Dim Sum is more than just a restaurant—it’s an experience that transports you to the heart of Asian culinary tradition. Each bite is a harmonious blend of flavor, texture, and passion, crafted meticulously to reflect the essence of dim sum culture. The moment you step in, you’re greeted by the comforting aroma of freshly steamed dumplings, the vibrant energy of a bustling kitchen, and the warm smiles of a team dedicated to delivering perfection on every plate.</p>
                            <div className="rating ">
                                <div className="mask mask-star bg-amber-400" aria-label="1 star"></div>
                                <div className="mask mask-star bg-amber-400" aria-label="2 star"></div>
                                <div className="mask mask-star bg-amber-400" aria-label="3 star" aria-current="true"></div>
                                <div className="mask mask-star bg-amber-400" aria-label="4 star"></div>
                                <div className="mask mask-star bg-amber-400" aria-label="5 star"></div>
                            </div>
                        </div>
                        <div>
                            <div className='relative'>
                                <h3 className={`text-3xl lg:text-[60px] absolute bottom-0 -right-20 -translate-x-1/2  text-white/20`}>-Rosario Rosa</h3>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className={`flex flex-col justify-center items-center gap-y-10 py-[60px] text-white`}>
                            <Image className="w-20 h-20" src={'/assets/client.png'} width={50} height={50} alt="Clients Reviews" />
                            <p className="text-center px-18">Sum Dim Sum is more than just a restaurant—it’s an experience that transports you to the heart of Asian culinary tradition. Each bite is a harmonious blend of flavor, texture, and passion, crafted meticulously to reflect the essence of dim sum culture. The moment you step in, you’re greeted by the comforting aroma of freshly steamed dumplings, the vibrant energy of a bustling kitchen, and the warm smiles of a team dedicated to delivering perfection on every plate.</p>
                            <div className="rating ">
                                <div className="mask mask-star bg-amber-400" aria-label="1 star"></div>
                                <div className="mask mask-star bg-amber-400" aria-label="2 star"></div>
                                <div className="mask mask-star bg-amber-400" aria-label="3 star" aria-current="true"></div>
                                <div className="mask mask-star bg-amber-400" aria-label="4 star"></div>
                                <div className="mask mask-star bg-amber-400" aria-label="5 star"></div>
                            </div>
                        </div>
                        <div>
                            <div className='relative'>
                                <h3 className={`text-3xl lg:text-[60px] absolute bottom-0 -right-20 -translate-x-1/2  text-white/20`}>-Rosario Rosa</h3>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                


            </Swiper>
            </Container>
        </>
    );
};

export default ReviewSlid;



/**
 * <div className={`flex flex-col justify-center items-center gap-y-10 text-white`}>
                        <Image className="w-20 h-20" src={'/assets/client.png'} width={50} height={50} alt="Clients Reviews" />
                        <p className="text-center">Sum Dim Sum is more than just a restaurant—it’s an experience that transports you to the heart of Asian culinary tradition. Each bite is a harmonious blend of flavor, texture, and passion, crafted meticulously to reflect the essence of dim sum culture. The moment you step in, you’re greeted by the comforting aroma of freshly steamed dumplings, the vibrant energy of a bustling kitchen, and the warm smiles of a team dedicated to delivering perfection on every plate.</p>
                        <div className="rating ">
                            <div className="mask mask-star bg-amber-400" aria-label="1 star"></div>
                            <div className="mask mask-star bg-amber-400" aria-label="2 star"></div>
                            <div className="mask mask-star bg-amber-400" aria-label="3 star" aria-current="true"></div>
                            <div className="mask mask-star bg-amber-400" aria-label="4 star"></div>
                            <div className="mask mask-star bg-amber-400" aria-label="5 star"></div>
                        </div>
                    </div>
 */