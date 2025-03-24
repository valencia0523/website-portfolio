import Banner from '@/components/layouts/Banner';
import CardContainer from '@/components/layouts/CardContainer';
import projectsBanner from '@/public/images/projects-banner.png';

const ProjectsPage = () => {
  return (
    <main>
      <Banner
        title="portfolio."
        subtitle="Explore my projects as I refine my front-end development skills."
        description="I’ve worked on small team projects and individual builds, focusing on
        clean code, responsiveness, and usability. Now, I'm eager to bring these
        skills to real-world applications."
        image={projectsBanner}
        altText="Projects Banner"
      />
      <CardContainer />
    </main>
  );
};

export default ProjectsPage;
