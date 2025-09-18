"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLinks = () => {

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
        <>
            {
                NavLinks.map(({ title, path }) =>
                    <Link className={`${location == path && 'font-bold'}`} key={path} href={path}>
                        <li>{title}</li>
                    </Link>
                )
            }
        </>
    );
};

export default NavLinks;