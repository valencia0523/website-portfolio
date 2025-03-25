import Banner from '@/components/layouts/Banner';
import SectionContainer from '@/components/layouts/SectionContainer';
import TechStack from '@/components/ui/TechStack';
import aboutBanner from '@/public/images/about-banner.jpg';
import Link from 'next/link';

const page = () => {
  return (
    <main>
      <header>
        <Banner
          title="about."
          subtitle="Aspiring front-end developer based in the UK."
          description="Previously a language tester for e-commerce platforms, I collaborated with developers to refine user experiences. Now, I'm crafting intuitive web applications. When not coding, I enjoy exploring tech, blogging, and a good cup of tea."
          image={aboutBanner}
          altText="About Banner"
        />
      </header>

      <section>
        <SectionContainer title="Tech Stack">
          <TechStack />
          {/* Link to the projects page */}
          <Link
            href="/projects"
            className="mt-10 text-[1.15rem] flex justify-end italic underline text-yellow-500"
          >
            View Projects
          </Link>
        </SectionContainer>
      </section>

      <section>
        <SectionContainer title="Random Facts"></SectionContainer>
      </section>
    </main>
  );
};

export default page;
