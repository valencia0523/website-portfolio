import Image from 'next/image';
import { ImageBannerProps } from '@/lib/types';

const BannerImage = ({ image, altText }: ImageBannerProps) => {
  return <Image src={image} alt={altText} className="w-full h-auto" />;
};

export default BannerImage;
