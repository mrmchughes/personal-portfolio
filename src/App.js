function App() {
  return (
    <div className="App">
      <section className="flex flex-row">
        <img src={require("./imgs/profile image.png")} alt="Michael Hughes" />
        <div>
          <h2>About</h2>
          <p>
            lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit
            amet
          </p>
          <div>
            <img src="" alt="Github link" />
            <img src="" alt="LinkedIn link" />
          </div>
        </div>
      </section>

      <section className="">
        <h2>My work</h2>
        <div className="border-solid border border-black">
          <div>
            <img src="" alt="Screenshot of Project" />
            <div>
              <p>Project Name</p>
              <div>
                <p>Github Repository</p>
                <p>Live Preview</p>
              </div>
              <p>Description of the project</p>
            </div>
          </div>
        </div>
        <div className="border-solid border border-black">
          <div>
            <img src="" alt="Screenshot of Project" />
            <div>
              <p>Project Name</p>
              <div>
                <p>Github Repository</p>
                <p>Live Preview</p>
              </div>
              <p>Description of the project</p>
            </div>
          </div>
        </div>
        <div className="border-solid border border-black">
          <div>
            <img src="" alt="Screenshot of Project" />
            <div>
              <p>Project Name</p>
              <div>
                <p>Github Repository</p>
                <p>Live Preview</p>
              </div>
              <p>Description of the project</p>
            </div>
          </div>
        </div>
        <div className="border-solid border border-black">
          <div>
            <img src="" alt="Screenshot of Project" />
            <div>
              <p>Project Name</p>
              <div>
                <p>Github Repository</p>
                <p>Live Preview</p>
              </div>
              <p>Description of the project</p>
            </div>
          </div>
        </div>
        <div className="border-solid border border-black">
          <div>
            <img src="" alt="Screenshot of Project" />
            <div>
              <p>Project Name</p>
              <div>
                <p>Github Repository</p>
                <p>Live Preview</p>
              </div>
              <p>Description of the project</p>
            </div>
          </div>
        </div>
        <div className="border-solid border border-black">
          <div>
            <img src="" alt="Screenshot of Project" />
            <div>
              <p>Project Name</p>
              <div>
                <p>Github Repository</p>
                <p>Live Preview</p>
              </div>
              <p>Description of the project</p>
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
        <div>
          <img src="" alt="Github link" />
          <img src="" alt="LinkedIn link" />
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
