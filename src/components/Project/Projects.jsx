import ProjectCard from "./ProjectCard";
import ProjectsJson from "../../data/Projects.json";
import "./project.css";

const Projects = () => {
  return (
    <div className="container min-h-[90vh] mx-auto" id="Projects">
      <h3 className="text-center text-3xl font-medium my-7">PROJECTS</h3>
      <div className="grid lg:grid-cols-3 gap-5 py-7 px-4">
        {ProjectsJson.projects.length > 0 ? (
          ProjectsJson.projects.map((project) => (
            <ProjectCard key={project.title} data={project} />
          ))
        ) : (
          <p className="col-span-4 text-lg font-medium">No Projects added.</p>
        )}
      </div>
    </div>
  );
};

export default Projects;
