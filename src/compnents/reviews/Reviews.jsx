import React from 'react';
import Container from '../Container';
import ReviewSlid from '../reviews/ReviewSlid';
import { Passions } from '@/app/layout';
import Image from 'next/image';


const Reviews = () => {
    return (
        <div style={{
            backgroundImage: "url('/assets/SumdimSection.png')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: "cover",
        }}>
            <div className='backdrop-blur-md bg-black/40 '>
                
                    <div className='relative py-10  flex justify-center items-center'>
                        <ReviewSlid>

                        </ReviewSlid>
                        <div className='absolute w-[80px]  top-5 left-5 lg:top-20 lg:left-80 lg:w-[100px]'>
                            <Image src={'/assets/qoute.png'} width={100} height={100} alt='clients qoute' />
                        </div>
                    </div>
                
            </div>
        </div>
    );
};

export default Reviews;