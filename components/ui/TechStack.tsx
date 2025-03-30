'use client';

import { techStackIcons } from '@/lib/techStackItems';
import { useGsapFadeInLeft } from '@/hooks/useGsapFadeInLeft';

const TechStack = () => {
  const techStackRef = useGsapFadeInLeft();

  return (
    <div
      ref={techStackRef}
      className="grid grid-cols-3 gap-10 items-center mt-10 opacity-0 lg:mt-15 lg:gap-14"
    >
      {techStackIcons.map((item) => {
        const { label, icon } = item;
        return (
          <div key={label} className="flex flex-col items-center">
            <div className="text-3xl lg:text-4xl">{icon}</div>
            <div className="text-center text-xl mt-1 lg:text-2xl">{label}</div>
          </div>
        );
      })}
    </div>
  );
};

export default TechStack;
