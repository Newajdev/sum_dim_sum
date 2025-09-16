import React from 'react';
import Container from '../Container';
import {poppins } from '@/app/layout';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone, FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';

const ContactInfobar = () => {
    return (
            <div className={`${poppins.className} bg-[#0C0C0C] text-[#F8F8FF] py-2.5`}>
                <Container>
                    <div className='flex justify-between items-center'>
                        {/* Contact info */}
                        <div className='flex gap-x-10'>
                            <p className='flex items-center gap-x-1'><FaPhone /> +1234567890</p>
                            <p className='flex items-center gap-x-1'><FaPhone /> +1234567890</p>
                            <p className='flex items-center gap-x-1'><FaPhone /> +1234567890</p>
                        </div>

                        {/* Social Links */}
                        <div className='flex gap-x-5 text-lg'>
                            <a href="https://www.facebook.com" target='_blank' ><FaFacebookF /></a>
                            <a href="https://www.instagram.com" target='_blank' ><FaInstagram /></a>
                            <a href="https://www.linkedin.com" target='_blank' ><FaLinkedinIn /></a>
                            <a href="https://www.x.com" target='_blank' ><FaXTwitter /></a>
                            
                        </div>
                    </div>
                </Container>
            </div>
    );
};

export default ContactInfobar;