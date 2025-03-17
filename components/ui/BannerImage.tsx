import Image from 'next/image';
import { ImageProps } from '@/lib/types';

const BannerImage = ({ image, altText }: ImageProps) => {
  return <Image src={image} alt={altText} className="w-full h-auto" />;
};

export default BannerImage;
