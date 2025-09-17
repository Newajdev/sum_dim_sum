import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaLocationDot, FaPhone, FaXTwitter } from "react-icons/fa6";
const SocialLinks = () => {
    return (
        <div className='flex gap-x-1 md:gap-x-2 lg:gap-x-4 xl:gap-x-5 text-lg'>
            <a href="https://www.facebook.com" target='_blank' ><FaFacebookF /></a>
            <a href="https://www.instagram.com" target='_blank' ><FaInstagram /></a>
            <a href="https://www.linkedin.com" target='_blank' ><FaLinkedinIn /></a>
            <a href="https://www.x.com" target='_blank' ><FaXTwitter /></a>

        </div>
    );
};

export default SocialLinks;