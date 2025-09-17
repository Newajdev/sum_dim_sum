
import Image from 'next/image';
import Container from '../../Container';
import Link from 'next/link';
import { raleway } from '@/app/layout';
import NavLinks from './NavLinks';


const Navbar = () => {



    return (
        <div className={`${raleway.className}  py-6  w-full`}>
            <Container>
                <nav className='flex justify-between items-center'>
                    {/* Company Logo */}
                    <Link href={'/'}>
                        <Image className='w-[148px] h-[50px]' src={'/assets/LogoWhite.png'} width={200} height={50} alt='sum dim sum logo' />
                    </Link>

                    {/* Menu  */}
                    <NavLinks />

                    {/* Special Button */}

                    
                        <button className='bg-gradient-to-r from-white to-[#ffffff1f] px-[1px] py-[2px] lg:px-[2px] lg:py-[9px] rounded-[9px]' >
                            <span className='bg-[#000000] text-[#F8F8FF] px-[5px] py-[2px] lg:px-[20px] lg:py-[10px] rounded-[8px]'>
                                Book a Table
                            </span>
                        </button>
                   


                </nav>
            </Container>
        </div>
    );
};

export default Navbar;