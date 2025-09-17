import React from 'react';
import Container from '../Container';
import PrimBtn from '../PrimBtn';
import { cinzel, raleway } from '@/app/layout';

const SumDim = () => {
    return (
        <section className='py-[120px]'>
            <div style={{
                backgroundImage: "url('/assets/SumdimSection.png')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: "cover",
            }} >
                <div className='bg-[#00000099] backdrop-blur-md text-white py-[60px]'>
                    <Container>
                        <div className='text-center flex flex-col justify-center items-center '>
                            <h2 className={`${cinzel.className} w-[994px] text-5xl leading-[136%]`}>Dive Into the World of Sumptuous Sum Dim Sum</h2>
                            <p className={`${raleway.className} leading-[150%] w-[1080px] mt-5 mb-10`}>Embark on a culinary journey where every bite tells a story of tradition and passion. At Sum Dim Sum, we bring you an authentic Asian dining experience with handcrafted dishes, vibrant flavors, and the warmth of our culture. From delicate dumplings to savory bites, our menu is a celebration of taste and artistry. Come, savor the joy of good food, and let every dish transport you to the heart of dim sum perfection.</p>

                            <PrimBtn Title={'Explore More'} />
                        </div>
                    </Container>
                </div>
            </div>
        </section>
    );
};

export default SumDim;