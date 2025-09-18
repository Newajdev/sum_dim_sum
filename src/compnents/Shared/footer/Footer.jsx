import { cinzel } from '@/app/layout';
import Container from '@/compnents/Container';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SocialLinks from '../contactbar/SocialLinks';
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {

    const FootLinks = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'About Us',
            path: '/about'
        },
        {
            title: 'Privacy Policy',
            path: '/privacypolicy'
        },
        {
            title: 'Terms & Conditions',
            path: '/terms&conditions'
        },
    ]
    return (
        <Container>
            <div className='flex flex-col justify-center md:flex-row gap-y-6 lg:flex-row lg:justify-between items-center py-[60px] border-y-2 border-[#B31217] lg:gap-y-0'>
                <div className='flex flex-col justify-center'>
                    <h3 className={`${cinzel.className} text-2xl mb-5`}>Contact</h3>

                    <div className='space-y-5 text-lg text-center'>
                        <p className='flex items-center gap-x-1'> <FaPhone />+1234567890</p>
                        <p className='flex items-center gap-x-1'><FaLocationDot /> Your Address Here</p>
                        <p className='flex items-center gap-x-1'> <MdEmail className='text-2xl' /> example@example.com</p>
                    </div>

                </div>
                <div className='flex flex-col justify-center items-center gap-y-10'>
                    <Link href={'/'}>
                        <Image className='w-[296px] h-[100px]' src={'/assets/LogoRed.png'} width={200} height={50} alt='sum dim sum logo' />
                    </Link>
                    <SocialLinks />
                </div>
                <div>
                    <ul className='space-y-5 text-center md:text-right lg:text-right flex flex-col justify-center'>
                        {
                            FootLinks.map(({ title, path }) =>
                                <Link key={path} href={path}>
                                    <li>{title}</li>
                                </Link>
                            )
                        }
                    </ul>
                </div>
            </div>
        </Container>
    );
};

export default Footer;