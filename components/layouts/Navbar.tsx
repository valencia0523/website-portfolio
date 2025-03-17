'use client';

import Link from 'next/link';
import { HiMenu } from 'react-icons/hi';
import { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { DarkModeToggle } from '../ui/darkModeToggle';
import { usePathname } from 'next/navigation';

type NavbarItems = {
  href: string;
  label: string;
  icon?: React.ReactNode;
};

//navbar list
const navbarItems: NavbarItems[] = [
  { href: '/about', label: 'about' },
  { href: '/projects', label: 'projects' },
  { href: '/blog', label: 'blog' },
  { href: '/contact', label: 'contact' },
];

const navbarIcons: NavbarItems[] = [
  {
    href: 'www.linkedin.com/in/valencia0523',
    label: 'LinkedIn',
    icon: <FaLinkedin />,
  },
  {
    href: 'https://github.com/valencia28',
    label: 'GitHub',
    icon: <FaGithub />,
  },
];

function Navbar() {
  //button
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);

  //current url (to show the active button)
  const pathname = usePathname();

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 p-5
      lg:flex lg:justify-center lg:gap-100   
      bg-[#FFE87C] dark:bg-[#202920]"
    >
      <div className="flex justify-between">
        {/* logo */}
        <Button className="mt-1.5 text-3xl caveat-brush-regular rounded-3xl shadow-current dark:shadow-amber-200">
          <Link href="/">Valencia M</Link>
        </Button>

        {/* nav-right side */}
        {/* small screen navbar */}
        <div className="mt-1.5">
          <Button
            size="icon"
            className="scale-200 lg:hidden"
            variant="ghost"
            onClick={() => setIsNavbarOpen(!isNavbarOpen)}
          >
            <HiMenu className="w-28 block" />
          </Button>
          <DarkModeToggle className="lg:hidden scale-80 hover:cursor-pointer" />
        </div>
      </div>

      <div
        className={`text-2xl pb-2 lg:hidden transition-all duration-500 ease-in-out
    ${
      isNavbarOpen
        ? 'opacity-100 max-h-[500px]'
        : 'opacity-0 max-h-0 overflow-hidden'
    }`}
      >
        <div className="flex flex-col items-center gap-2 w-full mt-5">
          {navbarItems.map((item) => {
            return (
              <div
                key={item.href}
                className="w-full border-b-1 border-white text-center pb-2"
              >
                <Link
                  href={item.href}
                  className="active:underline active:decoration-yellow-500 transition-discrete"
                  onClick={() => setIsNavbarOpen(false)}
                >
                  {item.label}
                </Link>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center pt-5 gap-10 scale-125">
          {navbarIcons.map((icon) => {
            return (
              <Link key={icon.href} href={icon.href}>
                {icon.icon}
              </Link>
            );
          })}
        </div>
      </div>

      {/* big screen navbar */}
      <div className="hidden lg:flex gap-3 justify-center items-center pt-2">
        <div className="flex text-2xl gap-4">
          {navbarItems.map((item) => {
            return (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className={`hover:cursor-pointer hover:underline hover:decoration-yellow-400
                    ${
                      pathname === item.href
                        ? 'underline decoration-double decoration-yellow-400'
                        : ''
                    }`}
                >
                  {item.label}
                </Link>
              </div>
            );
          })}
        </div>
        <div className="flex text-4xl gap-3 ml-2">
          {navbarIcons.map((icon) => {
            return (
              <Link key={icon.href} href={icon.href}>
                {icon.icon}
              </Link>
            );
          })}
          <DarkModeToggle className="ml-3 scale-93 hover:cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
