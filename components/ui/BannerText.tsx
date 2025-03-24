import { TextBannerProps } from '@/lib/types';

const BannerText = ({ title, subtitle, description }: TextBannerProps) => {
  return (
    <div className="max-w-100">
      <div className="text-7xl font-semibold">{title}</div>
      <div className="text-xl mt-3 text-gray-500">{subtitle}</div>
      <p className="mt-5 mb-2 text-[1.1rem]">{description}</p>
    </div>
  );
};

export default BannerText;
