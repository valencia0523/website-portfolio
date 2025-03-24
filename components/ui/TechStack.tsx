import { techStackIcons } from '@/lib/techStackItems';
import { techStackIcon } from '@/lib/types';

const TechStack = () => {
  return (
    <div>
      {techStackIcons.map((item) => {
        const { label, icon } = item;
        return (
          <div key={label}>
            <div>{icon}</div>
            <div>{label}</div>
          </div>
        );
      })}
    </div>
  );
};

export default TechStack;
