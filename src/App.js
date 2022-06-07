import Icon from "@mdi/react";
import { mdiArrowTopRightBoldBox } from "@mdi/js";

function App() {
  return (
    <div className="App font-serif">
      <section className="flex flex-row flex-wrap justify-center">
        <div className="flex text-center  sm:justify-start text-3xl">
          Michael Hughes
        </div>
        <div className="flex  text-center  sm:justify-end text-2xl space-x-4">
          <a href="">About</a>

          <a href="">Tools</a>

          <a href="">My Work</a>

          <a href="">Contact</a>
        </div>
      </section>

      <section className="flex flex-col text-center sm:flex-row sm:text-left justify-center p-2.5">
        <img
          src={require("./imgs/profile image.png")}
          alt="Michael Hughes"
          className="object-contain min-h-48 max-w-sm mr-3.5"
        />
        <div className="">
          <p className="text-xl">About me</p>
          <p className="mt-2.5 max-w-md">
            During a time when I was feeling dissatisfied in my previous career,
            I began coding by working my way through a beginner’s book on
            Python. I knew even then I had found something I was truly
            passionate about. Thinking my way through logical problems and
            developing projects to expand my skills has been a truly rewarding
            journey.
          </p>

          <p className="mt-2.5 text-xl">
            Some of the tools I have used developing applications:
          </p>

          <div className="grid gap-4 grid-cols-auto-fit">
            <figure>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React"
                className="h-16 w-16"
              />
              <figcaption>React</figcaption>
            </figure>

            <figure>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                alt="CSS"
                className="h-16 w-16"
              />
              <figcaption>CSS</figcaption>
            </figure>

            <figure>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="HTML"
                className="h-16 w-16"
              />
              <figcaption>HTML</figcaption>
            </figure>

            <figure>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JavaScript"
                className="h-16 w-16"
              />
              <figcaption>JavaScript</figcaption>
            </figure>

            <figure>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
                alt="NPM"
                className="h-16 w-16"
              />
              <figcaption>NPM</figcaption>
            </figure>

            <figure>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                alt="Tailwind CSS"
                className="h-16 w-16"
              />
              <figcaption>Tailwind CSS</figcaption>
            </figure>

            <figure>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                alt="TypeScript"
                className="h-16 w-16"
              />
              <figcaption>TypeScript</figcaption>
            </figure>
          </div>

          <div className="mt-2.5 flex flex-row justify-center sm:justify-end space-x-4">
            <a href="https://github.com/mrmchughes">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="Github Profile"
                className="h-10 w-10"
              />
            </a>
            <a href="https://www.linkedin.com/in/michaelhughes27/">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
                alt="LinkedIn link"
                className="h-10 w-10"
              />
            </a>
          </div>
        </div>
      </section>

      <section className="flex text-center sm:text-left justify-center m-3.5">
        <div>
          <p className="mt-2.5 text-xl">My work</p>

          <div className="grid gap-3 grid-cols-auto-fill mt-2.5">
            <div className="border-solid border border-black p-2.5">
              <img
                src="https://user-images.githubusercontent.com/10659805/153058789-c29aa45f-28d7-4bbc-8905-9ebbfa880e4d.png"
                alt="Screenshot of Memory Card Project"
                className="w-full h-36 mb-2"
              />
              <div>
                <div className="flex justify-center flex-row space-x-4">
                  <p className="text-lg">Memory Card</p>
                  <a href="https://github.com/mrmchughes/Memory-Card">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                      alt="Github Repository"
                      className="h-8 w-8"
                    />
                  </a>
                  <a href="https://mrmchughes.github.io/Memory-Card/">
                    <Icon path={mdiArrowTopRightBoldBox} size={1.4} />
                  </a>
                </div>
                <p className="mt-2.5">
                  Developed a Card Memory game, where players click on a card in
                  an array, and attempt to remember which ones they have already
                  selected.
                </p>
                <p className="mt-2.5">
                  Built With: HTML | CSS | JavaScript | React
                </p>
              </div>
            </div>

            <div className="border-solid border border-black p-2.5">
              <img
                src="https://user-images.githubusercontent.com/10659805/172234215-bb18174b-da8a-4b6e-aa1f-c41522c51b79.png"
                alt="Screenshot of CV-Application Project"
                className="w-full h-36 mb-2"
              />
              <div>
                <div className="flex justify-center flex-row space-x-4">
                  <p className="text-lg">CV-App</p>
                  <a href="https://github.com/mrmchughes/CV-Application">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                      alt="Github Repository"
                      className="h-8 w-8"
                    />
                  </a>
                  <a href="https://mrmchughes.github.io/CV-Application">
                    <Icon path={mdiArrowTopRightBoldBox} size={1.4} />
                  </a>
                </div>
                <p className="mt-2.5">
                  Developed a React application for users to input their
                  information, and using the user's information, dynamically
                  populate a CV.
                </p>
                <p className="mt-2.5">
                  Built With: HTML | CSS | JavaScript | React
                </p>
              </div>
            </div>

            <div className="border-solid border border-black p-2.5">
              <img
                src="https://user-images.githubusercontent.com/10659805/127752181-0bf3586a-fa60-4eb8-888b-d66c3b30b4bd.png"
                alt="Screenshot of Odins_Operations Project"
                className="w-full h-36 mb-2"
              />
              <div>
                <div className="flex justify-center flex-row space-x-4">
                  <p className="text-lg">Odins_Operations</p>
                  <a href="https://github.com/mrmchughes/odins_operations">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                      alt="Github Repository"
                      className="h-8 w-8"
                    />
                  </a>
                  <a href="https://mrmchughes.itch.io/odins-operations">
                    <Icon path={mdiArrowTopRightBoldBox} size={1.4} />
                  </a>
                </div>
                <p className="mt-2.5">
                  A group project developed for The Odin Project July 2021 game
                  jam, inspired by the classic edutainment game Number Munchers.
                </p>
                <p className="mt-2.5">Built With: HTML | CSS | JavaScript</p>
              </div>
            </div>

            <div className="border-solid border border-black p-2.5">
              <img
                src="https://user-images.githubusercontent.com/10659805/172234883-f6d0bd42-cd2d-4efc-a971-732cb0f855b7.png"
                alt="Screenshot of Todo-List Project"
                className="w-full h-36 mb-2"
              />
              <div>
                <div className="flex justify-center flex-row space-x-4">
                  <p className="text-lg">Todo-List</p>
                  <a href="https://github.com/mrmchughes/todo-list-project-2">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                      alt="Github Repository"
                      className="h-8 w-8"
                    />
                  </a>
                  <a href="https://mrmchughes.github.io/todo-list-project-2/">
                    <Icon path={mdiArrowTopRightBoldBox} size={1.4} />
                  </a>
                </div>
                <p className="mt-2.5">
                  Developed a Todo-List application for users to create Todo
                  Items and Project Folders.
                </p>
                <p className="mt-2.5">
                  Built With: HTML | CSS | JavaScript | Webpack | Local Storage
                </p>
              </div>
            </div>

            <div className="border-solid border border-black p-2.5">
              <img
                src="https://user-images.githubusercontent.com/10659805/172235150-a11b8184-580b-4b18-8edf-f24dfd18770b.png"
                alt="Screenshot of Weather App Project"
                className="w-full h-36 mb-2"
              />
              <div>
                <div className="flex justify-center flex-row space-x-4">
                  <p className="text-lg">Weather App</p>
                  <a href="https://github.com/mrmchughes/Weather-App">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                      alt="Github Repository"
                      className="h-8 w-8"
                    />
                  </a>
                  <a href="https://mrmchughes.github.io/Weather-App/">
                    <Icon path={mdiArrowTopRightBoldBox} size={1.4} />
                  </a>
                </div>
                <p className="mt-2.5">
                  Developed an application that allows for users to input a
                  location, and with the use of the Open Weather API, receive
                  the searched location's current forecast.
                </p>
                <p className="mt-2.5">
                  Built With: HTML | CSS | JavaScript | Git
                </p>
              </div>
            </div>

            <div className="border-solid border border-black p-2.5">
              <img
                src="https://user-images.githubusercontent.com/10659805/164803283-17f48e5d-c2cd-4a71-b931-6778d206e1e1.png"
                alt="Screenshot of Project"
                className="w-full h-36 mb-2"
              />
              <div>
                <div className="flex justify-center flex-row space-x-4">
                  <p className="text-lg">Shopping Cart</p>
                  <a href="https://github.com/mrmchughes/shopping-cart">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                      alt="Github Repository"
                      className="h-8 w-8"
                    />
                  </a>
                  <a href="https://mrmchughes.github.io/shopping-cart/">
                    <Icon path={mdiArrowTopRightBoldBox} size={1.4} />
                  </a>
                </div>
                <p className="mt-2.5">
                  Developed an E-Commerce site, incorporating Routes with
                  react-router-dom.
                </p>
                <p className="mt-2.5">
                  Built with: HTML | CSS | JavaScript | React | NPM | Tailwind
                  CSS | TypeScript
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-row text-center sm:text-left justify-center p-2.5 mt-2.5">
        <div>
          <p className="text-xl">Contact me</p>
          <p className="mt-2.5">
            Please get in touch if you think our work could be mutually
            beneficial.
          </p>
          <p className="mt-2.5">Newton, MA</p>
          <p className="mt-2.5">mrmchughes27@gmail.com</p>

          <div className="mt-2.5 flex flex-row justify-center sm:justify-start space-x-4 mt-2.5">
            <a href="https://github.com/mrmchughes">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="Github Repository"
                className="h-8 w-8"
              />
            </a>
            <a href="https://www.linkedin.com/in/michaelhughes27/">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
                alt="LinkedIn link"
                className="h-8 w-8"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

/* Want to get this working for increased responsiveness 
<picture>
  <source srcSet={require("./imgs/profile image.webp")} />    
</picture>
*/

/*
<section className="">
        <div className="float-left">
          Michael Hughes
          <br />
          Web Developer
        </div>
        <div className="float-right">
          <a href="">About</a>
          <a href="">Tools</a>
          <a href="">My Work</a>
          <a href="">Contact</a>
        </div>
      </section> 
*/
