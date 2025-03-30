'use client';

import BannerText from '../ui/BannerText';
import BannerImage from '../ui/BannerImage';
import { useGsapFadeInUp } from '@/hooks/useGsapFadeInUp';
import { BannerProps } from '@/lib/types';

const Banner = ({
  title,
  subtitle,
  description,
  image,
  altText,
  styleCss,
}: BannerProps) => {
  const bannerRef = useGsapFadeInUp();

  return (
    <>
      <div
        ref={bannerRef}
        className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between px-12 pt-20 pb-10"
        style={{ opacity: 0 }}
      >
        <div className="flex-5">
          <BannerText
            title={title}
            subtitle={subtitle}
            description={description}
          />
        </div>
        <div className="flex-5 pt-4">
          {image && (
            <BannerImage
              image={image}
              altText={altText || 'Banner image'}
              styleCss={styleCss || ''}
            />
          )}
        </div>
      </div>
      {/*horizontal line*/}
      <div className="border-b-3 border-yellow-100 shadow-amber-500" />
    </>
  );
};

export default Banner;
