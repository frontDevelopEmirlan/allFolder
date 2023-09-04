import React, { useState } from "react";
import { useMovies } from "../../context/MoviesContextProvider";
import "./AddProduct.scss";

const AddProduct = () => {
  const { addMovies } = useMovies();
  const [title, setTitle] = useState("");
  const [descr, setDescr] = useState("");
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");

  function createMovies() {
    let newMovies = {
      title: title,
      descr: descr,
      image: image,
      video: video,
    };
    addMovies(newMovies);
  }

  return (
    <div className="add">
      <div className="add--cart">
        <h1>ADD MOVIE</h1>
        <div>
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Description"
            onChange={(e) => setDescr(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Image"
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Video"
            value={video}
            onChange={(e) => setVideo(e.target.value)}
          />
        </div>
        <button onClick={createMovies}>create</button>
      </div>
    </div>
  );
};

export default AddProduct;
