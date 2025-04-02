'use client';

import { fetchProjects } from '@/lib/contentful';
import { useEffect, useState } from 'react';
import { Project } from '@/lib/types';
import CardItem from '../ui/CardItem';
import Loading from '@/app/loading';

const CardContainer = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const data = await fetchProjects();
        setProjects(data);
      } catch (error) {
        setError('❌ Failed to load projects. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    getProjects();
  }, []);

  if (loading) return <Loading />;
  if (error) return <div className="text-red-500 text-center p-4">{error}</div>;

  return (
    <div className="bg-yellow-50 dark:bg-[#161d27]">
      <div className="max-w-6xl mx-auto py-12 px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((item) => {
          return <CardItem key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default CardContainer;
