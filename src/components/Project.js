import React from "react";
import Icon from "@mdi/react";
import { mdiArrowTopRightBoldBox } from "@mdi/js";

function Project(props) {
  return (
    <div className="shadow-2xl bg-gray-50 p-2.5">
      <img
        src={props.src}
        alt={props.alt}
        className="w-full h-36 mb-2"
        tabIndex="0"
      />
      <div>
        <div className="flex justify-evenly flex-row space-x-4">
          <p className="text-xl">{props.projectName}</p>

          <a tabIndex="0" href={props.repositoryUrl}>
            <label className="text-lg">Repo</label>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="Github Repository"
              className="h-8 w-8 hover:scale-110"
            />
          </a>

          <a tabIndex="0" href={props.livePreview}>
            <label className="text-lg">Live</label>
            <Icon
              path={mdiArrowTopRightBoldBox}
              size={1.4}
              className="hover:scale-110"
            />
          </a>
        </div>
        <p className="mt-2.5">{props.description}</p>
        <p className="mt-2.5">{props.builtWith}</p>
      </div>
    </div>
  );
}

export default Project;
