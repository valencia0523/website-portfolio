import Banner from '@/components/layouts/Banner';
import SectionContainer from '@/components/layouts/SectionContainer';
import aboutBanner from '@/public/images/about-banner.jpg';

const page = () => {
  return (
    <main>
      <Banner
        title="about."
        subtitle="Aspiring front-end developer based in the UK."
        description="Previously a language tester for e-commerce platforms, I collaborated with developers to refine user experiences. Now, I'm crafting intuitive web applications. When not coding, I enjoy exploring tech, blogging, and a good cup of tea."
        image={aboutBanner}
        altText="About Banner"
      />
      <SectionContainer title="Tech Stack" />
    </main>
  );
};

export default page;
