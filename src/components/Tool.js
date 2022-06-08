import React from "react";

function Tool(props) {
  return (
    <figure>
      <img src={props.src} alt={props.alt} className="h-16 w-16" tabIndex="0" />
      <figcaption className="text-center">{props.caption}</figcaption>
    </figure>
  );
}

export default Tool;
