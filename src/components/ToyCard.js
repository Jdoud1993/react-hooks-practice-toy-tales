import React, {useState} from "react";

function ToyCard({toy, onDeleteToy}) {

  const [likes, setLikes] = useState(toy.likes)

  function handleDeleteClick(e) {
    onDeleteToy(toy.id)
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE"
    })
      .then((res) => res.json())
      .then(() => console.log("deleted!"))
  }

  function handleClick(e) {
    setLikes((curLikes) => curLikes+1)
    const newLikes = {likes: likes}
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newLikes)
    })
      .then((res) => res.json())
      .then((updatedToy) => console.log(updatedToy))
  }

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleClick}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDeleteClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
