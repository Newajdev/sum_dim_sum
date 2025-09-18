
import Image from 'next/image';
import Container from '../../Container';
import Link from 'next/link';
import { raleway } from '@/app/layout';
import NavLinks from './NavLinks';


const Navbar = () => {



    return (
        <div className={`${raleway.className} py-2 lg:py-6  w-full backdrop-blur-md bg-black/40 z-50`}>
            <Container>
                <div className="navbar text-white">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-black border border-white rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <NavLinks/>
                            </ul>
                        </div>
                        <Link href={'/'}>
                        <Image className='w-[148px] h-[50px]' src={'/assets/LogoWhite.png'} width={200} height={50} alt='sum dim sum logo' />
                    </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal flex lg:gap-x-6">
                            <NavLinks/>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <button className='bg-gradient-to-r from-white to-[#ffffff1f] px-[1px] py-[2px] lg:px-[2px] lg:py-[9px] rounded-[9px]' >
                        <span className='bg-[#000000] text-[#F8F8FF] px-[5px] py-[2px] lg:px-[20px] lg:py-[10px] rounded-[8px]'>
                            Book a Table
                        </span>
                    </button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;


/***
 * <nav className='flex justify-between items-center'>
                   
                    <Link href={'/'}>
                        <Image className='w-[148px] h-[50px]' src={'/assets/LogoWhite.png'} width={200} height={50} alt='sum dim sum logo' />
                    </Link>

                    <NavLinks />

                    


                    <button className='bg-gradient-to-r from-white to-[#ffffff1f] px-[1px] py-[2px] lg:px-[2px] lg:py-[9px] rounded-[9px]' >
                        <span className='bg-[#000000] text-[#F8F8FF] px-[5px] py-[2px] lg:px-[20px] lg:py-[10px] rounded-[8px]'>
                            Book a Table
                        </span>
                    </button>



                </nav>
 * 
 */