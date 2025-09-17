import React from 'react';
import Container from '../Container';
import SocialLinks from '../Shared/contactbar/SocialLinks';
import Image from 'next/image';
import { Passions, poppins, raleway } from '@/app/layout';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <div className='py-[120px]'>
            <Container>
                <div className='flex justify-center items-center '>
                    <div style={{
                        backgroundImage: "url('/assets/Contact.png')",
                        backgroundRepeat: 'no-repeat',
                    }} className='w-[60%] '>

                        <div className={`${raleway.className} rounded-l-2xl text-white bg-black/40 py-[120px] backdrop-blur-md px-[60px] h-[746px] `}>
                            <h3 className='text-2xl font-semibold mb-2.5'>Just Say Hi !</h3>
                            <p>Tell us more about you and we’ll contact you soon.</p>

                            <ContactForm/>
                        </div>


                    </div>
                    {/* Contact info side */}
                    <div className='w-[40%] h-[746px] bg-[#F7E7E8] py-[229px] rounded-r-[20px] pl-[60px] relative text-[#0C0C0C]'>
                        <div className='absolute top-1/2 right-0  -translate-y-[50%] z-10'>
                            <Image className='w-[800px] h-[500px]' src={'/assets/fulltree.png'} width={500} height={500} alt='Contact us' />
                        </div>

                        <p className={`${Passions.className} text-[64px] absolute bottom-10 right-10 text-[#646464] z-20`}>Contact Us</p>


                        <div className='z-30'>
                            <h3 className={`${poppins.className} font-semibold text-2xl mb-5`}>Contact Information</h3>
                            <div className='space-y-3'>
                                <p>Maui, Hawaii, USA</p>
                                <p>Call us: +1234567890</p>
                                <p>Whatsapp: +1234567890</p>
                            </div>

                            <div className='space-y-5 mt-[60px]'>
                                <h3 className={`${poppins.className} font-semibold text-2xl`}>Follow Us</h3>
                                <SocialLinks />
                            </div>
                        </div>
                    </div>

                </div>

            </Container>
        </div>
    );
};

export default Contact;