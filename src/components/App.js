import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((res) => res.json())
      .then((toysData) => setToys(toysData))
  }, [])

  function handleAddToy(newToy) {
    setToys([...toys, newToy])
  }

  function handleDeleteToy(toyName) {
    setToys(toys.filter((toy) => toy.id !==toyName))
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onDeleteToy={handleDeleteToy}/>
    </>
  );
}

export default App;


  
// App
//    ToyForm
//    Header
//    ToyContainer
//               ToyCard