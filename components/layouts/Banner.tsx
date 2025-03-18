'use client';

import BannerText from '../ui/BannerText';
import BannerImage from '../ui/BannerImage';
import projectsBanner from '@/public/images/projects-banner.png';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Banner = () => {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      bannerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 2, ease: 'power3.out' }
    );
  }, []);

  return (
    <>
      <div
        ref={bannerRef}
        className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between px-12 pt-20 pb-10"
        style={{ opacity: 0 }}
      >
        <div className="flex-5">
          <BannerText
            title="portfolio."
            subtitle="Explore my projects as I refine my front-end development skills."
            description="I’ve worked on small team projects and individual builds, focusing on
        clean code, responsiveness, and usability. Now, I'm eager to bring these
        skills to real-world applications."
          />
        </div>
        <div className="flex-5 pt-4">
          <BannerImage image={projectsBanner} altText="Projects Banner" />
        </div>
      </div>
      {/*horizontal line*/}
      <div className="border-b-3 border-yellow-200 shadow-xl" />
    </>
  );
};

export default Banner;
