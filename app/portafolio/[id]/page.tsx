import Navbar from '@/components/organisms/Navbar';
import Footer from '@/components/organisms/Footer';
import ProjectDetail from '@/components/organisms/ProjectDetail';
import { projectsData } from '@/constants/portfolioData';
import { notFound } from 'next/navigation';

export const dynamicParams = true;

type Params = {
  id: string;
};

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export function generateMetadata({ params }: { params: Params }) {
  const project = projectsData.find((p) => p.id === params.id);

  if (!project) {
    return {
      title: 'Proyecto no encontrado',
      description: 'El proyecto que buscas no existe.',
    };
  }

  return {
    title: `${project.title} | Tupla Core`,
    description: project.fullDescription,
    openGraph: {
      title: project.title,
      description: project.fullDescription,
      images: [project.image],
    },
  };
}

export default function ProjectPage({ params }: { params: Params }) {
  const project = projectsData.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <ProjectDetail project={project} />
      <Footer />
    </main>
  );
}
