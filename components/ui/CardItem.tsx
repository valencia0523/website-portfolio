import { Project } from '@/lib/types';
import Image from 'next/image';
import ImageComingSoon from '@/public/images/image-coming-soon.jpg';

const CardItem = (props: Project) => {
  const { id, title, url, techStack, image, description } = props;
  const imageSrc = image ? `https:${image}` : ImageComingSoon;

  return (
    <div
      className="flex flex-col items-center shadow-xl bg-white rounded-[12px]
        hover:shadow-2xl hover:cursor-pointer"
    >
      <div className="rounded-[12px] m-3">
        <div className="w-[280px] h-[170px] mt-2 lg:w-[320px] lg:h-[200px]">
          <Image
            src={imageSrc}
            alt={title}
            width={400}
            height={300}
            className="rounded-[10px] object-cover w-full h-full overflow-hidden"
          />
        </div>
        <div className="m-2 w-[265px] lg:m-4">
          <div className="text-xl lg:text-2xl">{title}</div>
          <div className="text-gray-600 mt-1 line-clamp-3 h-[70px] overflow-hidden">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
