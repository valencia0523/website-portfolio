import BannerText from '../ui/BannerText';
import BannerImage from '../ui/BannerImage';
import projectsBanner from '@/public/images/projects-banner.png';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-6xl mx-auto flex justify-between px-12 pt-25 pb-20"
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
        <div className="flex-5">
          <BannerImage image={projectsBanner} altText="Projects Banner" />
        </div>
      </motion.section>
      {/*horizontal line*/}
      <div className="border-b-4 border-yellow-200 shadow-xl" />
    </>
  );
};

export default Banner;
