import { getProjects } from '@/lib/contentful';

export default async function AboutPage() {
  const projects = await getProjects(); // 배열 반환

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Projects</h1>
      {projects.map((project) => (
        <div key={project.id} className="mb-4">
          <h2 className="text-xl font-semibold">{project.title}</h2>
        </div>
      ))}
    </main>
  );
}

// export default AboutPage;
