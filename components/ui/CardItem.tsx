import { Project } from '@/lib/types';
import Image from 'next/image';
import ImageComingSoon from '@/public/images/image-coming-soon.jpg';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogHeader,
  DialogDescription,
} from '@/components/ui/dialog';
import { useGsapFadeInLeft } from '@/hooks/useGsapFadeInLeft';

const CardItem = (props: Project) => {
  const { id, title, url, githubUrl, techStack, image, description } = props;
  const imageSrc = image ? `https:${image}` : ImageComingSoon;
  const containerRef = useGsapFadeInLeft();

  return (
    <Dialog>
      <DialogTrigger>
        <div
          className="flex flex-col items-center shadow-xl bg-white rounded-[12px]
      hover:shadow-2xl hover:cursor-pointer opacity-0 w-full max-w-[320px]"
          ref={containerRef}
        >
          <div className="rounded-[12px] py-3 lg:px-3">
            <div className="w-full max-w-[280px] aspect-[16/9] mt-2 lg:max-w-[300px]">
              <Image
                src={imageSrc}
                alt={title}
                width={400}
                height={300}
                className="rounded-[10px] object-cover w-full h-full overflow-hidden"
              />
            </div>
            <div className="text-left my-2 pl-1.5 w-full max-w-[265px] lg:mx-1 lg:my-4">
              <div className="text-xl lg:text-2xl">{title}</div>
              <div className="text-gray-600 mt-1 line-clamp-3 h-[70px] overflow-hidden lg:mt-2">
                {description}
              </div>
            </div>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="flex flex-col items-center rounded-[12px] px-3 lg:max-w-[40%]">
        <DialogHeader>
          <div className="mt-3 w-full max-w-[600px] aspect-[16/9] rounded-[12px] lg:max-w-[700px]">
            <Image
              src={imageSrc}
              alt={title}
              width={800}
              height={400}
              className="w-full h-full object-fill rounded-[12px]"
            />
          </div>
          <DialogTitle className="text-xl font-semibold text-left ml-1.5 capitalize lg:text-4xl lg:mt-4">
            {title}
          </DialogTitle>
          <div className="flex flex-row gap-3 justify-start ml-1.5 lg:text-xl lg:mt-0.5">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FFE87C] px-1 py-0.5 rounded-[4px] 
              hover:bg-yellow-300 hover:shadow-md"
            >
              Live Site
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FFE87C] px-1 py-0.5 rounded-[4px]
               hover:bg-yellow-300 hover:shadow-md"
            >
              GitHub
            </a>
          </div>
        </DialogHeader>
        <DialogDescription className="mx-1.5 lg:text-[1.2rem] lg:mx-5 lg:my-3">
          <p className="text-black">{description}</p>
          <div className="text-gray-600 mt-1.5 lg:mt-2">{techStack}</div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default CardItem;
