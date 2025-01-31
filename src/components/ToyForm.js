import React, {useState} from "react";

function ToyForm({onAddToy}) {

  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [likes, setLikes] = useState(0)

  function handleSubmit() {
    const toyData = {
      name: name,
      image: image,
      likes: likes
    }
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(toyData)
    })
      .then((res) => res.json())
      .then((newToy) => onAddToy(newToy))
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
