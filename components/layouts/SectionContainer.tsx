import TechStack from '../ui/TechStack';

const SectionContainer = ({ title }) => {
  return (
    <div>
      <div>{title}</div>
      <TechStack />
    </div>
  );
};

export default SectionContainer;
