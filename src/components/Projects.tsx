import { ProjectCard } from "@/components/ProjectCard";
import { projectList } from "../data/projects";

const Projects = () => {
  return (
    <section id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <h2 className="heading h2">Projects</h2>

        <div className="space-y-12">
          {projectList.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Projects };
