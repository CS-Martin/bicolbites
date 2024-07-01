'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { ModeToggle } from './theme-toggler';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Playfair_Display, Sacramento } from 'next/font/google';
import HeaderSearch from './header-search';

const PlayfairDisplay = Playfair_Display({ subsets: ['latin'] });
const SacramentoRegular = Sacramento({ weight: '400', subsets: ['latin'] });

interface NavbarLinkProps {
    href: string;
    children: React.ReactNode;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ href, children }) => (
    <Link href={href} className="hidden text-white md:block">
        {children}
    </Link>
);

interface NavbarProps {
    isHome: boolean;
    isFixed: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isHome, isFixed }) => (
    <nav
        className={`${PlayfairDisplay.className} fixed left-0 top-0 z-30 flex w-full items-center transition-all duration-500 ease-in-out ${
            isHome
                ? `${isFixed ? 'h-[80px] bg-black bg-opacity-80 shadow-lg' : 'h-[150px] bg-transparent'}`
                : 'h-[80px] bg-black'
        }`}
    >
        <div className="container flex h-16 items-center justify-between md:h-20">
            <Link href="/" className="text-2xl text-white">
                Bicol <span className={SacramentoRegular.className}>Bites</span>
            </Link>
            <div className="flex items-center gap-x-3 md:gap-x-8">
                <NavbarLink href="/">Home</NavbarLink>
                {isHome && (
                    <NavbarLink href="#recipes-anchor">Recipes</NavbarLink>
                )}
                {!isHome && <HeaderSearch />}
                <ModeToggle />
            </div>
        </div>
    </nav>
);

const HeaderNavbar: React.FC = () => {
    const pathname = usePathname();
    const { theme } = useTheme();
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsFixed(window.scrollY > 60);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isHome = pathname === '/';

    return <Navbar isHome={isHome} isFixed={isFixed} />;
};

export default HeaderNavbar;
