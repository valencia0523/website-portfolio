import { SectionContainerProps } from '@/lib/types';
import TechStack from '../ui/TechStack';
import Link from 'next/link';

const SectionContainer = ({ title, children }: SectionContainerProps) => {
  return (
    <div className=" bg-yellow-50">
      <div className="py-15 px-15">
        <div className="text-4xl text-center">{title}</div>
        {children}
      </div>

      {/*horizontal line*/}
      <div className="border-b-3 border-yellow-100 shadow-amber-500" />
    </div>
  );
};

export default SectionContainer;
