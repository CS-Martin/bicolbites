'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { ModeToggle } from './theme-toggler';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const HeaderNavbar = () => {
   const pathname = usePathname();
   const { theme } = useTheme();

   // Triggers fireflies animation
   const [light, setLight] = useState(theme === 'light' ? 10 : 0);

   useEffect(() => {
      setLight(theme === 'light' ? 10 : 0);
   }, [theme]);

   // Navbar handler onscroll
   const [scrollY, setScrollY] = useState(0);
   const [isFixed, setIsFixed] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setScrollY(window.scrollY);
         setIsFixed(window.scrollY > 60);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   return (
      <>
         {pathname === '/' ? (
            <nav
               className={`fixed left-0 top-0 z-50 flex h-[150px] w-full items-center transition-all duration-500 ease-in-out ${isFixed ? 'h-[80px] bg-black bg-opacity-90 shadow-lg' : 'bg-transparent'}`}>
               <div className="container flex h-16 items-center justify-between md:h-20">
                  <div className="text-white">Logo</div>

                  {/* Navigation */}
                  <div className={`flex items-center gap-x-3 md:gap-x-8`}>
                     <a href="#" className={`hidden text-white md:block`}>
                        {' '}
                        Home
                     </a>
                     <a href="#" className={`hidden text-white md:block`}>
                        {' '}
                        Recipes
                     </a>
                     <ModeToggle />
                  </div>
               </div>
            </nav>
         ) : (
            <nav
               className={`fixed left-0 top-0 z-50 flex h-[80px] w-full items-center bg-black transition-all duration-500 ease-in-out`}>
               <div className="flex h-16 w-full items-center justify-between px-5 md:h-20">
                  <Link href="/" className="text-white">
                     Logo
                  </Link>

                  {/* Navigation */}
                  <div className={`flex items-center gap-x-3 md:gap-x-8`}>
                     <a href="#" className={`hidden text-white md:block`}>
                        {' '}
                        Home
                     </a>
                     <a href="#" className={`hidden text-white md:block`}>
                        {' '}
                        Recipes
                     </a>
                     <ModeToggle />
                  </div>
               </div>
            </nav>
         )}
      </>
   );
};

export default HeaderNavbar;
