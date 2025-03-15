import { fetchProjects } from '@/lib/contentful';

export default async function AboutPage() {
  const projects = await fetchProjects();
  console.log(
    '📸 프로젝트 이미지 목록:',
    projects.map((p) => ({ id: p.id, image: p.image }))
  );

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Projects</h1>
      {projects.map((project) => (
        <div key={project.id} className="mb-4">
          <h2 className="text-xl font-semibold">{project.title}</h2>
          <img src={project.image} alt={project.title} />
          <h3>{project.techStack}</h3>
        </div>
      ))}
    </main>
  );
}

// export default AboutPage;
