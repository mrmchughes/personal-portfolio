import React from "react";

function Tool(props) {
  return (
    <figure>
      <img src="{props.image}" alt="{props.alt}" className="h-16 w-16" />
      <figcaption className="text-center">{props.caption}</figcaption>
    </figure>
  );
}

export default Tool;
