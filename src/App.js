function App() {
  return (
    <div className="App font-serif">
      <section className="flex flex-row justify-center">
        <img
          src={require("./imgs/profile image.png")}
          alt="Michael Hughes"
          className="object-contain h-48 w-96"
        />
        <div className="">
          <h2>About</h2>
          <p className="mt-2.5">
            During a time when I was feeling dissatisfied in my previous career,
            I began coding by working my way through a beginner’s book on
            Python. I knew even then I had found something I was truly
            passionate about. Thinking my way through logical problems and
            developing projects to expand my skills has been a truly rewarding
            journey.
          </p>

          <p className="mt-2.5">
            Some of the tools I have used developing applications:
          </p>

          <div className="grid gap-2.5 grid-cols-auto-fit">
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

          <div className="mt-2.5 flex flex-row justify-end space-x-4">
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

      <section className="grid gap-2.5 grid-cols-auto-fit">
        <h2>My work</h2>
        <div className="border-solid border border-black">
          <div>
            <img
              src="https://user-images.githubusercontent.com/10659805/153058789-c29aa45f-28d7-4bbc-8905-9ebbfa880e4d.png"
              alt="Screenshot of Memory Card Project"
            />
            <div>
              <p>Memory Card</p>
              <div>
                <a href="https://github.com/mrmchughes/Memory-Card">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt="Github Repository"
                    className="h-8 w-8"
                  />
                </a>
                <a href="https://mrmchughes.github.io/Memory-Card/">
                  <img
                    src={require("./imgs/arrow-top-right-bold-box-outline.svg")}
                    alt="Live Preview"
                  />
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
        </div>
        <div className="border-solid border border-black">
          <div>
            <img
              src="https://user-images.githubusercontent.com/10659805/172234215-bb18174b-da8a-4b6e-aa1f-c41522c51b79.png"
              alt="Screenshot of CV-Application Project"
            />
            <div>
              <p>CV-Application</p>
              <div>
                <a href="https://github.com/mrmchughes/CV-Application">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt="Github Repository"
                    className="h-8 w-8"
                  />
                </a>
                <a href="https://mrmchughes.github.io/CV-Application">
                  <img
                    src={require("./imgs/arrow-top-right-bold-box-outline.svg")}
                    alt="Live Preview"
                  />
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
        </div>
        <div className="border-solid border border-black">
          <div>
            <img
              src="https://user-images.githubusercontent.com/10659805/127752181-0bf3586a-fa60-4eb8-888b-d66c3b30b4bd.png"
              alt="Screenshot of Odins_Operations Project"
            />
            <div>
              <p>Odins_Operations</p>
              <div>
                <a href="https://github.com/mrmchughes/odins_operations">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt="Github Repository"
                    className="h-8 w-8"
                  />
                </a>
                <a href="https://mrmchughes.itch.io/odins-operations">
                  <img
                    src={require("./imgs/arrow-top-right-bold-box-outline.svg")}
                    alt="Live Preview"
                  />
                </a>
              </div>
              <p className="mt-2.5">
                A group project developed for The Odin Project July 2021 game
                jam, inspired by the classic edutainment game Number Munchers.
              </p>
              <p className="mt-2.5">Built With: HTML | CSS | JavaScript</p>
            </div>
          </div>
        </div>
        <div className="border-solid border border-black">
          <div>
            <img
              src="https://user-images.githubusercontent.com/10659805/172234883-f6d0bd42-cd2d-4efc-a971-732cb0f855b7.png"
              alt="Screenshot of Todo-List Project"
            />
            <div>
              <p>Todo-List</p>
              <div>
                <a href="https://github.com/mrmchughes/todo-list-project-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt="Github Repository"
                    className="h-8 w-8"
                  />
                </a>
                <a href="https://mrmchughes.github.io/todo-list-project-2/">
                  <img
                    src={require("./imgs/arrow-top-right-bold-box-outline.svg")}
                    alt="Live Preview"
                  />
                </a>
              </div>
              <p className="mt-2.5">
                Developed a Todo-List application for users to create Todo Items
                and Project Folders.
              </p>
              <p className="mt-2.5">
                Built With: HTML | CSS | JavaScript | Webpack | Local Storage
              </p>
            </div>
          </div>
        </div>
        <div className="border-solid border border-black">
          <div>
            <img
              src="https://user-images.githubusercontent.com/10659805/172235150-a11b8184-580b-4b18-8edf-f24dfd18770b.png"
              alt="Screenshot of Weather App Project"
            />
            <div>
              <p>Weather App</p>
              <div>
                <a href="https://github.com/mrmchughes/Weather-App">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt="Github Repository"
                    className="h-8 w-8"
                  />
                </a>
                <a href="https://mrmchughes.github.io/Weather-App/">
                  <img
                    src={require("./imgs/arrow-top-right-bold-box-outline.svg")}
                    alt="Live Preview"
                  />
                </a>
              </div>
              <p className="mt-2.5">
                Developed an application that allows for users to input a
                location, and with the use of the Open Weather API, receive the
                searched location's current forecast.
              </p>
              <p className="mt-2.5">
                Built With: HTML | CSS | JavaScript | Git
              </p>
            </div>
          </div>
        </div>
        <div className="border-solid border border-black">
          <div>
            <img
              src="https://user-images.githubusercontent.com/10659805/164803283-17f48e5d-c2cd-4a71-b931-6778d206e1e1.png"
              alt="Screenshot of Project"
            />
            <div>
              <p>Shopping Cart</p>
              <div>
                <a href="https://github.com/mrmchughes/shopping-cart">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt="Github Repository"
                    className="h-8 w-8"
                  />
                </a>
                <a href="https://mrmchughes.github.io/shopping-cart/">
                  <img
                    src={require("./imgs/arrow-top-right-bold-box-outline.svg")}
                    alt="Live Preview"
                  />
                </a>
              </div>
              <p className="mt-2.5">
                Developed an E-Commerce site, incorporating Routes with
                react-router-dom.
              </p>
              <p className="mt-2.5">
                Built with: HTML | CSS | JavaScript | React | NPM | Tailwind CSS
                | TypeScript
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <h2>Contact me</h2>
        <p className="mt-2.5">
          Please get in touch if you think our work could be mutually
          beneficial.
        </p>
        <p className="mt-2.5">Newton, MA</p>
        <p className="mt-2.5">mrmchughes27@gmail.com</p>

        <div className="mt-2.5 flex flex-row justify-start space-x-4 mt-2.5">
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
