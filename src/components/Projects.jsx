import ProjectsCard from './ProjectsCard';
import { projects } from '../data';
import SectionTitle from './SectionTitle';

const Projects = () => {
  const projectsList = projects.map((project) => {
    return <ProjectsCard key={project.id} {...project} />;
  });

  return (
    <section className="py-20 align-element" id="projects">
      <SectionTitle text="web creations" />
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projectsList}
      </div>
    </section>
  );
};
export default Projects;
