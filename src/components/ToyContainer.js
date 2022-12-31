import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, onDeleteToy}) {

  const disToys = toys.map((toy) => <ToyCard key={toy.id} toy={toy} onDeleteToy={onDeleteToy}/>)

  return (
    <div id="toy-collection">{disToys}</div>
  );
}

export default ToyContainer;
