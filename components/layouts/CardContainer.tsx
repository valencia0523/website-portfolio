'use client';

import { fetchProjects } from '@/lib/contentful';
import { useEffect, useRef, useState } from 'react';
import { Project } from '@/lib/types';
import CardItem from '../ui/CardItem';
import gsap from 'gsap';

const CardContainer = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const getProjects = async () => {
      const data = await fetchProjects();
      setProjects(data);
      setIsLoaded(true);
    };
    getProjects();
  }, []);

  useEffect(() => {
    if (projects.length > 0 && containerRef.current) {
      gsap.fromTo(
        containerRef.current.children,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 3,
          stagger: 0.2,
          ease: 'power3.out',
          clearProps: 'all',
        }
      );
    }
  }, [projects]);

  return (
    <div className="bg-yellow-50">
      <div
        ref={containerRef}
        className={`max-w-6xl mx-auto py-12 px-8 grid grid-cols-1 md:grid-cols-3 gap-6 ${
          isLoaded ? '' : 'opacity-0'
        }`}
      >
        {projects.map((item) => {
          return <CardItem key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default CardContainer;
