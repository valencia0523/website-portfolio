type BannerTextProps = {
  title: string;
  subtitle: string;
  description: string;
};

const BannerText = ({ title, subtitle, description }: BannerTextProps) => {
  return (
    <div className="max-w-100">
      <div className="text-7xl font-semibold">{title}</div>
      <div className="text-xl mt-10 text-gray-500">{subtitle}</div>
      <p className="mt-2">{description}</p>
    </div>
  );
};

export default BannerText;
