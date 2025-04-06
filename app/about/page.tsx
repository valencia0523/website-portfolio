'use client';

import Banner from '@/components/layouts/Banner';
import SectionContainer from '@/components/layouts/SectionContainer';
import TechStack from '@/components/ui/TechStack';
import aboutBanner from '@/public/images/about-banner.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { BiSolidVideoRecording } from 'react-icons/bi';
import randomFactsImg from '@/public/images/random-facts-image-1.jpg';
import { Button } from '@/components/ui/button';

const page = () => {
  // random facts icon & image
  const [showIcon, setShowIcon] = useState(true);
  const [showImage, setShowImage] = useState(false);
  const [hasImageShown, setHasImageShown] = useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting && !hasImageShown) {
          setShowIcon(true);
          setTimeout(() => {
            setShowIcon(false);
            setShowImage(true);
            setHasImageShown(true);
            obs.disconnect();
          }, 2000);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasImageShown]);

  return (
    <main className="pt-20">
      <header>
        <Banner
          title="about."
          subtitle="Aspiring front-end developer based in the UK."
          description="Previously a language tester for e-commerce platforms, I collaborated with developers to refine user experiences. Now, I'm crafting intuitive web applications. When not coding, I enjoy exploring tech, blogging, and a good cup of tea."
          image={aboutBanner}
          altText="About Banner"
          styleCss="md:w-3/4 md:h-auto dark:brightness-75"
        />
      </header>

      {/* tech stack */}
      <section className="bg-yellow-50 dark:bg-[#161d27]">
        <SectionContainer title="Tech Stack">
          <TechStack />
          <div className="flex flex-col items-end gap-7">
            {/* Link to the projects page */}
            <Link
              href="/cv-sample.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 text-[1.1rem] italic text-yellow-500 lg:text-xl hover:text-yellow-400"
            >
              💡<span className="underline">Download CV</span>
            </Link>

            {/* CV download link */}
            <Link href="/projects" className="w-full lg:w-38">
              <Button
                type="button"
                className="rounded-xl text-xl cursor-pointer w-full"
              >
                View Projects
              </Button>
            </Link>
          </div>
        </SectionContainer>
      </section>

      {/*horizontal line*/}
      <div className="border-b-3 border-yellow-100 shadow-amber-500 w-full dark:border-gray-700" />

      {/* random facts */}
      <section ref={sectionRef} className="dark:bg-[#161d27]">
        <SectionContainer title="Random Facts">
          <div className="md:flex md:flex-row">
            <div className="flex flex-col items-center pt-5 pb-5 md:flex-4">
              {showIcon && (
                <BiSolidVideoRecording className="text-8xl text-red-700 animate-pulse md:text-9xl md:mt-15" />
              )}
              {showImage && (
                <Image
                  src={randomFactsImg}
                  alt="random facts image"
                  className="md:w-1/2 md:mt-3 rounded-xl dark:brightness-75"
                />
              )}
            </div>
            <div className="md:flex-3 md:mt-15">
              <div className="text-xl mt-3 text-gray-500">
                Tech by Day, Vlogs by Night
              </div>
              <p className="mt-5 mb-2 text-[1.1rem]">
                I capture my everyday life and travel adventures through vlogs
                here in the UK. During the week, I work as a front-end
                developer, but come the weekend, I switch gears to video editing
                and YouTube content creation. If you're interested in connecting
                or curious about my daily life, feel free to visit{' '}
                <a
                  href="https://www.youtube.com/@valencialog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline italic text-yellow-500"
                >
                  Valencia LOG
                </a>
                {''} and join me on my journey!
              </p>
            </div>
          </div>
        </SectionContainer>
      </section>
    </main>
  );
};

export default page;
