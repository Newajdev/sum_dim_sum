import Container from '../Container';
import {poppins } from '@/app/layout';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaLocationDot, FaPhone, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


const ContactInfobar = () => {

    return (
            <div className={`${poppins.className} bg-[#0C0C0C] text-[#F8F8FF] py-2.5`}>
                <Container>
                    <div className='flex justify-between items-center'>
                        {/* Contact info */}
                        <div className='flex gap-x-3 md:gap-x-5 lg:gap-x-8 xl:gap-x-10 text-lg'>
                            <p className='flex items-center gap-x-1'><FaLocationDot /> Your Address Here</p>
                            <p className='flex items-center gap-x-1'> <FaPhone />+1234567890</p>
                            <p className='flex items-center gap-x-1'> <MdEmail className='text-2xl'/> example@example.com</p>
                        </div>

                        {/* Social Links */}
                        <div className='flex gap-x-1 md:gap-x-2 lg:gap-x-4 xl:gap-x-5 text-lg'>
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