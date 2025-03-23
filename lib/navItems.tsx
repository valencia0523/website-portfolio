import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { NavbarItem } from './types';

//navbar list
export const navbarItems: NavbarItem[] = [
  { href: '/about', label: 'about' },
  { href: '/projects', label: 'projects' },
  { href: '/blog', label: 'blog' },
  { href: '/contact', label: 'contact' },
];

export const navbarIcons: NavbarItem[] = [
  {
    href: 'https://www.linkedin.com/in/valencia0523/',
    label: 'LinkedIn',
    icon: <FaLinkedin />,
  },
  {
    href: 'https://github.com/valencia28',
    label: 'GitHub',
    icon: <FaGithub />,
  },
];
