import React from "react";

const ReactTraining = (props) => {
  console.log(props);
  return (
    <div>
      <p>React training</p>
      <p>{props.name}</p>
    </div>
  );
};

export default ReactTraining;
