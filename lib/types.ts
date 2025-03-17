import { StaticImageData } from 'next/image';

export type Project = {
  //   fields?: React.ReactNode;
  title: string;
  url: string;
  id: string;
  techStack: string;
  image?: string | StaticImageData;
};

export type ImageProps = {
  image: StaticImageData;
  altText: string;
};
