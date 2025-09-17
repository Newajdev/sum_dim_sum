"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const NavLinks = () => {
    const [visible, setVisible] = useState(true)
    const location = usePathname()
    const NavLinks = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Menu & Locations',
            path: '/menulocations'
        },
        {
            title: 'Reservation',
            path: '/reservation'
        },
        {
            title: 'Merchandise',
            path: '/merchandise'
        },
        {
            title: 'Career',
            path: '/career'
        },
        {
            title: 'Contact',
            path: '/contact'
        },
    ]
    return (
        <ul className='text-[#F8F8FF] flex gap-x-3 md:gap-x-5 lg:gap-x-8 xl:gap-x-10'>
            {
                NavLinks.map(({ title, path }) =>
                    <Link className={`${location == path && 'font-bold'}`} key={path} href={path}>
                        <li>{title}</li>
                    </Link>
                )
            }
        </ul>
    );
};

export default NavLinks;