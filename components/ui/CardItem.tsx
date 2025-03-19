import { Project } from '@/lib/types';
import Image from 'next/image';
import ImageComingSoon from '@/public/images/image-coming-soon.jpg';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogHeader,
  DialogDescription,
} from '@/components/ui/dialog';

const CardItem = (props: Project) => {
  const { id, title, url, githubUrl, techStack, image, description } = props;
  const imageSrc = image ? `https:${image}` : ImageComingSoon;
  const containerRef = useRef<HTMLDivElement>(null);

  // CardItem animation effect
  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 2, ease: 'power3.out' }
    );
  }, []);

  return (
    <Dialog>
      <DialogTrigger>
        <div
          className="flex flex-col items-center shadow-xl bg-white rounded-[12px]
        hover:shadow-2xl hover:cursor-pointer opacity-0"
          ref={containerRef}
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
      </DialogTrigger>

      <DialogContent className="flex flex-col items-center rounded-[12px]">
        <DialogHeader>
          <div className="mt-3.5 px-1.5 w-[320px] h-[200px] rounded-[12px]">
            <Image
              src={imageSrc}
              alt={title}
              width={500}
              height={400}
              className="w-full h-full object-fill rounded-[12px]"
            />
          </div>
          <DialogTitle className="text-xl font-semibold text-left ml-3 capitalize">
            {title}
          </DialogTitle>
          <div className="flex flex-row gap-3 justify-start ml-3">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FFE87C] px-1 py-0.5 rounded-[4px]"
            >
              Live Site
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FFE87C] px-1 py-0.5 rounded-[4px]"
            >
              GitHub
            </a>
          </div>
        </DialogHeader>
        <DialogDescription>
          <p className="text-black">{description}</p>
          <div className="text-gray-600 mt-1">{techStack}</div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default CardItem;
