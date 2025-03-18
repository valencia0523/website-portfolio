import { StaticImageData } from 'next/image';

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

export type ImageProps = {
  image: StaticImageData;
  altText: string;
};
