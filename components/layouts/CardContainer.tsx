'use client';

import { fetchProjects } from '@/lib/contentful';
import { useEffect, useState } from 'react';
import { Project } from '@/lib/types';
import CardItem from '../ui/CardItem';

const CardContainer = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const getProjects = async () => {
      const data = await fetchProjects();
      setProjects(data);
    };
    getProjects();
  }, []);

  return (
    <div className="bg-yellow-50 h-700">
      <div className="max-w-6xl mx-auto py-12 px-8 ">
        {projects.map((item) => {
          return <CardItem key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default CardContainer;
