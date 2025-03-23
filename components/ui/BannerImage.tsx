import Image from 'next/image';
import { ImageProp } from '@/lib/types';

const BannerImage = ({ image, altText }: ImageProp) => {
  return <Image src={image} alt={altText} className="w-full h-auto" />;
};

export default BannerImage;
