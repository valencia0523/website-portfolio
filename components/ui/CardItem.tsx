import { Project } from '@/lib/types';
import Image from 'next/image';
import ImageComingSoon from '@/public/images/image-coming-soon.jpg';

const CardItem = (props: Project) => {
  const { id, title, url, techStack, image } = props;
  const imageSrc = image ? `https:${image}` : ImageComingSoon;

  return (
    <div className="flex flex-col items-center space-y-7 border-2 border-amber-900">
      <div>
        <Image src={imageSrc} alt={title} width={300} height={350} />
        <div>{title}</div>
        <div>{techStack}</div>
      </div>
    </div>
  );
};

export default CardItem;
