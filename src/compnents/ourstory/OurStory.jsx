import React from 'react';
import PrimBtn from '../PrimBtn';
import Container from '../Container';
import { cinzel, raleway } from '@/app/layout';
import Image from 'next/image';

const OurStory = () => {
    return (
        <Container>
            <section className='py-[120px]'>
                {/* Story Section */}
                <div className='relative w-full mb-[75px]'>
                    <div style={{
                        backgroundImage: "url('/assets/tree01.png')",
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',

                    }} className='w-[1069] bg-[#F7E7E8] py-[60px] pl-[60px] rounded-[20px]'>
                        <h3 className={`${cinzel.className} text-5xl`}>Our Story</h3>
                        <p className={`${raleway.className} mt-5 mb-10 w-[664px]`}>At Sum Dim Sum, we are a local Singaporean brand that prepares dim sum dishes with wholehearted dedication and passion. Our chefs use traditional techniques to craft our dishes, ensuring that they are of the highest quality. Come and experience our fresh and flavorful cuisine.</p>
                        <PrimBtn Title={'Learn More'} />
                    </div>
                    <div className='absolute top-[60px] right-128'>
                        <div className='relative'>
                            <div className='w-[512px] h-[365px] rounded-[20px] absolute top-6 -left-6 z-10 '>
                                <Image src={'/assets/ourStory.png'} height={365} width={512} alt='our Story'/>
                            </div>
                            <div className='w-[512px] h-[365px] border border-[#B31217] rounded-[20px] absolute '></div>
                        </div>
                    </div>
                </div>

                {/* Statistics */}
                <div className='pt-[60px] flex items-center justify-between'>
                    {/* happy guest */}
                    <div className='flex flex-col items-center justify-center'>
                        <Image src={'/assets/Guests.png'} width={60} height={60} alt='our happy guests'/>
                        <p className={`${cinzel.className} text-4xl pt-5 pb-2 text-center`}>6,000+</p>
                        <p className={`${raleway.className} text-lg font-medium text-center`}>Happy Guests</p>
                    </div>
                    {/* happy guest */}
                    <div className='flex flex-col items-center justify-center'>
                        <Image src={'/assets/Dishes.png'} width={60} height={60} alt='Unique Dishes'/>
                        <p className={`${cinzel.className} text-4xl pt-5 pb-2 text-center`}>50+</p>
                        <p className={`${raleway.className} text-lg font-medium text-center`}>Unique Dishes </p>
                    </div>
                    {/* Years Of Quality */}
                    <div className='flex flex-col items-center justify-center'>
                        <Image src={'/assets/Quality.png'} width={60} height={60} alt='Years Of Quality'/>
                        <p className={`${cinzel.className} text-4xl pt-5 pb-2 text-center`}>20+</p>
                        <p className={`${raleway.className} text-lg font-medium text-center`}>Years Of Quality</p>
                    </div>
                    {/* Monthly Events */}
                    <div className='flex flex-col items-center justify-center'>
                        <Image src={'/assets/Events.png'} width={60} height={60} alt='Monthly Events'/>
                        <p className={`${cinzel.className} text-4xl pt-5 pb-2 text-center`}>12+</p>
                        <p className={`${raleway.className} text-lg font-medium text-center`}>Monthly Events</p>
                    </div>
                </div>

            </section>
        </Container>
    );
};

export default OurStory;