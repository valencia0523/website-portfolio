'use client';

import Link from 'next/link';
import { HiMenu } from 'react-icons/hi';
import { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { DarkModeToggle } from '../ui/darkModeToggle';

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

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 p-5 lg:flex lg:justify-center lg:gap-100  
   
    border-b-2 border-amber-500"
    >
      <div className="flex justify-between">
        {/* logo */}
        <div className="mt-1.5 text-2xl">
          <Link href="/">Valencia M</Link>
        </div>

        {/* nav-right side */}
        <Button
          size="icon"
          className="scale-200 lg:hidden"
          variant="ghost"
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}
        >
          <HiMenu className="w-28 block" />
        </Button>
      </div>

      {/* small screen navbar */}
      <div
        className={`text-2xl pt-5 pb-3 lg:hidden
          ${isNavbarOpen ? 'block' : 'hidden'}`}
      >
        <div className="flex flex-col items-center gap-2 w-full">
          {navbarItems.map((item) => {
            return (
              <div className="w-full border-b-2 border-amber-500 text-center pb-2">
                <Link key={item.href} href={item.href}>
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
      <div className="hidden lg:flex gap-3">
        <div className="flex text-xl gap-3">
          {navbarItems.map((item) => {
            return (
              <div>
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              </div>
            );
          })}
        </div>
        <div className="flex text-2xl gap-3">
          {navbarIcons.map((icon) => {
            return (
              <Link key={icon.href} href={icon.href}>
                {icon.icon}
              </Link>
            );
          })}
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
