import projectsList from "../projectsList";
import Project from "../components/Project";

export default function Previous_Work() {
    return (
        <main
        id="myWork"
        className="flex text-center sm:text-left justify-center m-3.5"
      >
        <div>
          <p className="mt-2.5 text-2xl text-center underline">My work</p>

          <div className="grid gap-4 grid-cols-auto-fill mt-2.5">
            {projectsList.map((project) => {
              return (
                <Project
                  key={project.id}
                  src={project.src}
                  alt={project.alt}
                  projectName={project.projectName}
                  repositoryUrl={project.repositoryUrl}
                  livePreview={project.livePreview}
                  description={project.description}
                  builtWith={project.builtWith}
                />
              );
            })}
          </div>
        </div>
      </main>
    )
}