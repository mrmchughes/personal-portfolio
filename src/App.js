import toolsList from "./toolsList";
import Tool from "./components/Tool";
import projectsList from "./projectsList";
import Project from "./components/Project";

function App() {
  return (
    <div className="App font-serif">
      <nav
        id="home"
        className="flex flex-row flex-wrap justify-center sm:justify-between p-6"
      >
        <a tabIndex="0" className="flex text-3xl" href="#home">
          Michael Hughes
        </a>
        <div className="flex text-center text-3xl space-x-4">
          <a tabIndex="0" className="hover:scale-110" href="#about">
            About
          </a>

          <a tabIndex="0" className="hover:scale-110" href="#tools">
            Tools
          </a>

          <a tabIndex="0" className="hover:scale-110" href="#myWork">
            My Work
          </a>

          <a tabIndex="0" className="hover:scale-110" href="#contact">
            Contact
          </a>
        </div>
      </nav>

      <header
        id="about"
        className="flex flex-col text-center sm:flex-row sm:text-left justify-center p-2.5"
      >
        <img
          src={require("./imgs/profile image.png")}
          alt="Michael Hughes"
          className="object-contain min-h-48 max-w-sm mr-3.5"
          tabIndex="0"
        />
        <div>
          <p className="text-2xl">About me</p>
          <p className="mt-2.5 max-w-md text-xl">
            During a time when I was feeling dissatisfied in my previous career,
            I began coding by working my way through a beginner’s book on
            Python.
          </p>
          <p className="mt-2.5 max-w-md text-xl">
            I knew even then I had found something I was truly passionate about.
          </p>
          <p className="mt-2.5 max-w-md text-xl">
            Thinking my way through logical problems and developing projects to
            expand my skills has been a truly rewarding journey.
          </p>

          <div className="mt-2.5 flex flex-row justify-center sm:justify-end space-x-4">
            <a tabIndex="0" href="https://github.com/mrmchughes">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="Github Profile"
                className="h-10 w-10 hover:scale-110"
              />
            </a>
            <a tabIndex="0" href="https://www.linkedin.com/in/michaelhughes27/">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
                alt="LinkedIn link"
                className="h-10 w-10 hover:scale-110"
              />
            </a>
          </div>
        </div>
      </header>

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

      <main
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
      </main>

      <footer
        id="contact"
        className="flex flex-row text-center justify-center p-2.5 mt-2.5 bg-gray-50"
      >
        <div>
          <h2 className="text-3xl">Contact me</h2>
          <p className="mt-2.5 text-xl">
            Please get in touch if you think our work could be mutually
            beneficial.
          </p>
          <p className="mt-2.5 text-2xl">Newton, MA</p>
          <p className="mt-2.5 text-2xl">mrmchughes27@gmail.com</p>

          <div className="mt-2.5 flex flex-row justify-center space-x-4 mt-2.5">
            <a tabIndex="0" href="https://github.com/mrmchughes">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="Github Repository"
                className="h-8 w-8 hover:scale-110"
              />
            </a>
            <a tabIndex="0" href="https://www.linkedin.com/in/michaelhughes27/">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
                alt="LinkedIn link"
                className="h-8 w-8 hover:scale-110"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
