import React from 'react';
import Container from '../Container';
import Image from 'next/image';
import ReserForm from './ReserForm';
import { cinzel, raleway } from '@/app/layout';

const Reservation = () => {
    return (
        <div className='px-5'>
            <Container>
                <div className='grid grid-cols-1 lg:grid-cols-2 py-[120px]'>
                    <div className='hidden lg:flex'>
                        <div className='relative'>
                            <div className='w-[536px] h-[514px] rounded-[20px] z-10 absolute top-5 left-5'>
                                <Image src={'/assets/ourStory2.png'} width={536} height={514} alt='our Story' />
                            </div>
                            <div className='w-[536px] h-[514px] border border-[#B31217] rounded-[20px]  '></div>
                        </div>

                    </div>
                    <div>
                        <h3 className={`${cinzel.className} text-center lg:text-left text-4x lg:text-[32px]`}>Reserve Your Table for an Authentic Sum Dim Sum Experience</h3>
                        <p className={`${raleway.className} text-center lg:text-left mt-5`}>Don’t miss the chance to savor the finest flavors of authentic dim sum in a warm and inviting atmosphere. Whether it’s a special occasion, a family gathering, or a cozy dinner for two, our handcrafted dishes and impeccable service make every moment memorable. Reserve your table now and let us take you on a culinary journey filled with tradition, passion, and the joy of exceptional food. Your unforgettable dining experience awaits!</p>

                        <ReserForm />


                    </div>
                </div>
            </Container>

        </div>
    );
};

export default Reservation;