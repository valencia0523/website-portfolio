'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import mainImage from '@/public/images/main-page.jpg';
import Typewriter from 'typewriter-effect';
import Link from 'next/link';

function HomePage() {
  return (
    <main
      className="flex flex-col px-3.5 h-screen bg-yellow-50 justify-center md:flex-row 
    md:items-center md:justify-center md:bg-transparent"
    >
      <section className="bg-yellow-50">
        <Image
          src={mainImage}
          alt="main page image"
          className="hidden md:block w-[40vw] rounded-xl"
        ></Image>
      </section>

      <section className="bg-yellow-50 md:py-50 md:px-15 md:mt-15">
        <div className="flex gap-2 text-2xl">
          <div>Curious</div>
          <span className="font-bold inline-block min-w-[180px]">
            <Typewriter
              options={{
                strings: ['Thinker', 'Tinkerer', 'Developer'],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>
        {/* underline div */}
        <div className="border-b-4 border-yellow-500 w-50 mb-5"></div>
        <div className="uppercase font-extrabold leading-tight text-6xl mt-3">
          Valencia Miyeon
        </div>

        <Link href="/projects" className="mt-5">
          <Button className="rounded-xl text-md mt-10 hover:cursor-pointer">
            Go to Projects
          </Button>
        </Link>
      </section>
    </main>
  );
}

export default HomePage;
