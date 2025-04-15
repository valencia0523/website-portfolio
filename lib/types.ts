import { StaticImageData } from 'next/image';
import React from 'react';

// project type
export type Project = {
  title: string;
  url?: string;
  id: string;
  techStack?: string;
  image?: string;
  description?: string;
  githubUrl?: string;
};

// banner props type
export type TextBannerProps = {
  title: string;
  subtitle: string;
  description: string;
};

export type ImageBannerProps = {
  image: StaticImageData;
  altText: string;
  styleCss: string;
};

export type BannerProps = TextBannerProps & Partial<ImageBannerProps>;

// navbar item type
export type NavbarItem = {
  href: string;
  label: string;
  icon?: React.ReactNode;
};

//tech stack icons type
export type TechStackIcon = {
  label: string;
  icon: React.ReactNode;
};

//section container props
export type SectionContainerProps = {
  title: string;
  children?: React.ReactNode;
};
