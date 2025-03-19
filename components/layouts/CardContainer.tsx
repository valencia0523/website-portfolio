'use client';

import { fetchProjects } from '@/lib/contentful';
import { useEffect, useRef, useState } from 'react';
import { Project } from '@/lib/types';
import CardItem from '../ui/CardItem';

const CardContainer = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getProjects = async () => {
      const data = await fetchProjects();
      setProjects(data);
    };
    getProjects();
  }, []);

  return (
    <div className="bg-yellow-50">
      <div className="max-w-6xl mx-auto py-12 px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((item) => {
          return <CardItem key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default CardContainer;
