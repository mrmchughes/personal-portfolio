function App() {
  return (
    <div className="App">
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
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="Github link"
              className="h-8 w-8"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
              alt="LinkedIn link"
              className="h-8 w-8"
            />
          </div>
        </div>
      </section>

      <section className="grid gap-2.5 grid-cols-auto-fit">
        <h2>My work</h2>
        <div className="border-solid border border-black">
          <div>
            <img src="" alt="Screenshot of Memory Card Project" />
            <div>
              <p>Memory Card</p>
              <div>
                <a href="https://github.com/mrmchughes/Memory-Card">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                    Github Repository
                  </button>
                </a>
                <a href="https://mrmchughes.github.io/Memory-Card/">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                    Live Preview
                  </button>
                </a>
              </div>
              <p>
                Developed a Card Memory game, where players click on a card in
                an array, and attempt to remember which ones they have already
                selected. Built With: HTML | CSS | JavaScript | React
              </p>
            </div>
          </div>
        </div>
        <div className="border-solid border border-black">
          <div>
            <img src="" alt="Screenshot of CV-Application Project" />
            <div>
              <p>CV-Application</p>
              <div>
                <p>Github Repository</p>
                <p>Live Preview</p>
              </div>
              <p>
                Developed a React application for users to input their
                information, and using the user's information, dynamically
                populate a CV. Built With: HTML | CSS | JavaScript | React
              </p>
            </div>
          </div>
        </div>
        <div className="border-solid border border-black">
          <div>
            <img src="" alt="Screenshot of Odins_Operations Project" />
            <div>
              <p>Odins_Operations</p>
              <div>
                <p>Github Repository</p>
                <p>Live Preview</p>
              </div>
              <p>
                A group project developed for The Odin Project July 2021 game
                jam, inspired by the classic edutainment game Number Munchers.
                Built With: HTML | CSS | JavaScript
              </p>
            </div>
          </div>
        </div>
        <div className="border-solid border border-black">
          <div>
            <img src="" alt="Screenshot of Todo-List Project" />
            <div>
              <p>Todo-List</p>
              <div>
                <p>Github Repository</p>
                <p>Live Preview</p>
              </div>
              <p>
                Developed a Todo-List application for users to create Todo Items
                and Project Folders. Built With: HTML | CSS | JavaScript |
                Webpack | Local Storage
              </p>
            </div>
          </div>
        </div>
        <div className="border-solid border border-black">
          <div>
            <img src="" alt="Screenshot of Weather App Project" />
            <div>
              <p>Weather App</p>
              <div>
                <p>Github Repository</p>
                <p>Live Preview</p>
              </div>
              <p>
                Developed an application that allows for users to input a
                location, and with the use of the Open Weather API, receive the
                searched location's current forecast. Built With: HTML | CSS |
                JavaScript | Git
              </p>
            </div>
          </div>
        </div>
        <div className="border-solid border border-black">
          <div>
            <img src="" alt="Screenshot of Project" />
            <div>
              <p>Shopping Cart</p>
              <div>
                <p>Github Repository</p>
                <p>Live Preview</p>
              </div>
              <p>
                Developed an E-Commerce site, incorporating Routes with
                react-router-dom. Built with: HTML | CSS | JavaScript | React |
                NPM | Tailwind CSS | TypeScript
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <h2>Contact me</h2>
        <p>
          Please get in touch if you think our work could be mutually
          beneficial.
        </p>
        <p>Newton, MA</p>
        <p>mrmchughes27@gmail.com</p>
        <div className="mt-2.5 flex flex-row justify-start space-x-4">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="Github link"
            className="h-8 w-8"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
            alt="LinkedIn link"
            className="h-8 w-8"
          />
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
