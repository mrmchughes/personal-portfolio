import uniqid from 'uniqid';
import Tool from './Tool';

export default function Toolbox() {
    const toolsList = [
        {
          id: uniqid(),
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          alt: "",
          caption: "React",
        },
        {
          id: uniqid(),
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
          alt: "",
          caption: "CSS3",
        },
        {
          id: uniqid(),
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          alt: "",
          caption: "HTML5",
        },
        {
          id: uniqid(),
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          alt: "",
          caption: "JavaScript",
        },
        {
          id: uniqid(),
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
          alt: "",
          caption: "NPM",
        },
        {
          id: uniqid(),
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
          alt: "",
          caption: "Tailwind CSS",
        },
        {
          id: uniqid(),
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
          alt: "",
          caption: "TypeScript",
        },
    ];

    return (
        <section id="tools" className="flex flex-col justify-center p-2.5">
            <p className="mt-2.5 text-2xl text-center underline">
                Tools Used
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
    )
}