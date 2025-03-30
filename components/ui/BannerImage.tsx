import Image from 'next/image';
import { ImageBannerProps } from '@/lib/types';

const BannerImage = ({ image, altText, styleCss }: ImageBannerProps) => {
  return <Image src={image} alt={altText} className={styleCss} />;
};

export default BannerImage;
