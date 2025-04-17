'use client';

import Link from 'next/link';
import { navbarItems } from '@/lib/navItems';
// import { Button } from '../ui/button';
// import { FaChevronUp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center">
      {/* scroll top button */}
      {/* <Button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="rounded-t-full w-25 bg-[#ffe87c] dark:bg-[#192d4b] dark:text-white cursor-pointer hover:bg-[#ffe87c]"
      >
        <FaChevronUp className="scale-150 dark:text-[#f0f0f0]" />
      </Button> */}

      {/* page link */}
      <section
        className="bg-[#ffe87c] dark:bg-[#192d4b] w-full h-full p-5 flex justify-center items-center gap-100 
      md:text-xl"
      >
        <div>© 2025 Valencia Miyeon Jang</div>
        <div className="hidden lg:flex gap-10">
          {navbarItems.map((item) => {
            return (
              <Link
                href={item.href}
                key={item.href}
                className="hover:text-gray-600 dark:hover:text-gray-300"
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
