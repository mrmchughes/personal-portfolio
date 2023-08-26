export default function Intro(){
    return(
        <header
        id="about"
        className="flex flex-col text-center sm:flex-row sm:text-left justify-center p-2.5"
      >
        <img
          src={require("../imgs/profile image.png")}
          alt="Michael Hughes"
          className="object-contain min-h-48 max-w-sm mr-3.5"
          tabIndex="0"
        />
        <div>
          <p className="text-2xl text-center">About me</p>
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
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
                    alt="Github Profile"
                    className="h-14 w-14 hover:scale-110"
                />
                </a>
                <a tabIndex="0" href="https://www.linkedin.com/in/michaelhughes27/">
                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain-wordmark.svg"
                    alt="LinkedIn link"
                    className="h-20 w-20 hover:scale-110"
                />
                </a>    
          </div>
        </div>
      </header>
    );
};