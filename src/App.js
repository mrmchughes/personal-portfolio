import toolsList from "./toolsList";
import Tool from "./components/Tool";
import projectsList from "./projectsList";
import Project from "./components/Project";

function App() {
  return (
    <div className="App font-serif">
      <section className="flex flex-row flex-wrap justify-center sm:justify-between p-6">
        <div className="flex text-3xl">Michael Hughes</div>
        <div className="flex text-center text-3xl space-x-4">
          <a className="hover:scale-110" href="#about">
            About
          </a>

          <a className="hover:scale-110" href="#tools">
            Tools
          </a>

          <a className="hover:scale-110" href="#myWork">
            My Work
          </a>

          <a className="hover:scale-110" href="#contact">
            Contact
          </a>
        </div>
      </section>

      <section
        id="about"
        className="flex flex-col text-center sm:flex-row sm:text-left justify-center p-2.5"
      >
        <img
          src={require("./imgs/profile image.webp")}
          alt="Michael Hughes"
          className="object-contain min-h-48 max-w-sm mr-3.5"
        />
        <div>
          <p className="text-2xl">About me</p>
          <p className="mt-2.5 max-w-md text-xl">
            During a time when I was feeling dissatisfied in my previous career,
            I began coding by working my way through a beginner’s book on
            Python. I knew even then I had found something I was truly
            passionate about. Thinking my way through logical problems and
            developing projects to expand my skills has been a truly rewarding
            journey.
          </p>

          <div className="mt-2.5 flex flex-row justify-center sm:justify-end space-x-4">
            <a href="https://github.com/mrmchughes">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="Github Profile"
                className="h-10 w-10 hover:scale-110"
              />
            </a>
            <a href="https://www.linkedin.com/in/michaelhughes27/">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
                alt="LinkedIn link"
                className="h-10 w-10 hover:scale-110"
              />
            </a>
          </div>
        </div>
      </section>

      <section id="tools" className="flex flex-col justify-center p-2.5">
        <p className="mt-2.5 text-2xl text-center">
          Some of the tools I have used developing applications:
        </p>

        <div className="flex flex-row justify-center flex-wrap space-x-4 mt-2.5">
          {toolsList.map((tool) => {
            return (
              <Tool
                key={tool.id}
                src={tool.src}
                alt={tool.alt}
                caption={tool.caption}
              />
            );
          })}
        </div>
      </section>

      <section
        id="myWork"
        className="flex text-center sm:text-left justify-center m-3.5"
      >
        <div>
          <p className="mt-2.5 text-xl">My work</p>

          <div className="grid gap-3 grid-cols-auto-fill mt-2.5">
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
      </section>

      <section
        id="contact"
        className="flex flex-row text-center justify-center p-2.5 mt-2.5"
      >
        <div>
          <p className="text-2xl">Contact me</p>
          <p className="mt-2.5 text-xl">
            Please get in touch if you think our work could be mutually
            beneficial.
          </p>
          <p className="mt-2.5 text-xl">Newton, MA</p>
          <p className="mt-2.5 text-xl">mrmchughes27@gmail.com</p>

          <div className="mt-2.5 flex flex-row justify-center space-x-4 mt-2.5">
            <a href="https://github.com/mrmchughes">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="Github Repository"
                className="h-8 w-8 hover:scale-110"
              />
            </a>
            <a href="https://www.linkedin.com/in/michaelhughes27/">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
                alt="LinkedIn link"
                className="h-8 w-8 hover:scale-110"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
