import React, { useEffect, useState } from "react";
import { useMovies } from "../../context/MoviesContextProvider";
// import "./EditProduct.scss";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  const [title, setTitle] = useState("");
  const [descr, setDescr] = useState("");
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");
  const { getOneMovies, editMovies, oneMovies } = useMovies();

  const { id } = useParams();

  useEffect(() => {
    getOneMovies(id);
  }, []);
  console.log(oneMovies);

  useEffect(() => {
    if (oneMovies) {
      setTitle(oneMovies.title);
      setDescr(oneMovies.descr);
      setImage(oneMovies.image);
      setVideo(oneMovies.video);
    }
  }, [oneMovies]);

  function saveMovies() {
    let editedMovies = {
      title: title,
      descr: descr,
      image: image,
      video: video,
    };
    editMovies(id, editedMovies);
  }

  return (
    <div className="add">
      <div className="add--cart">
        <h1>EDIT MOVIE</h1>
        <div>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Description"
            value={descr}
            onChange={(e) => setDescr(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Image"
            value={image}
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
        <button onClick={saveMovies}>save</button>
      </div>
    </div>
  );
};

export default EditProduct;
