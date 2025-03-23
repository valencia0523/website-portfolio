import { StaticImageData } from 'next/image';

// project type
export type Project = {
  //   fields?: React.ReactNode;
  id: string;
  title: string;
  description?: string;
  url?: string;
  githubUrl?: string;
  image?: string | StaticImageData;
  techStack: string;
};

// image props type
export type ImageProp = {
  image: StaticImageData;
  altText: string;
};

// navbar item type
export type NavbarItem = {
  href: string;
  label: string;
  icon?: React.ReactNode;
};
