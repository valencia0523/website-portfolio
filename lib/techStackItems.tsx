import { TechStackIcon } from './types';
import { FaReact, FaGithub } from 'react-icons/fa';
import {
  SiTypescript,
  SiTailwindcss,
  SiJira,
  SiMysql,
  SiNextdotjs,
  SiReactquery,
} from 'react-icons/si';
import { RiJavascriptFill } from 'react-icons/ri';

export const techStackIcons: TechStackIcon[] = [
  { label: 'React', icon: <FaReact /> },
  { label: 'Next.js', icon: <SiNextdotjs /> },
  { label: 'TypeScript', icon: <SiTypescript /> },
  { label: 'JavaScript', icon: <RiJavascriptFill /> },
  { label: 'React Query', icon: <SiReactquery /> },
  { label: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { label: 'GitHub', icon: <FaGithub /> },
  { label: 'Jira', icon: <SiJira /> },
  { label: 'MySQL', icon: <SiMysql /> },
];
