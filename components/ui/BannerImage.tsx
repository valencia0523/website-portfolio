import Image from 'next/image';
import { StaticImageData } from 'next/image';

type BannerImageProps = {
  image: StaticImageData;
  altText: string;
};

const BannerImage = ({ image, altText }: BannerImageProps) => {
  return <Image src={image} alt={altText} className="w-full h-auto" />;
};

export default BannerImage;
