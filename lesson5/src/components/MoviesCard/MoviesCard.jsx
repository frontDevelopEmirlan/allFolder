import React, { useEffect } from "react";
import { useMovies } from "../../context/MoviesContextProvider";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { BsHeartFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./MoviesCard.scss";
const MoviesCard = ({ el }) => {
  const { readMovies, deleteMovies } = useMovies();

  const navigate = useNavigate();
  useEffect(() => {
    readMovies();
  }, []);
  return (
    <div className="card">
      <img src={el.image} alt="moviesIMG" />
      <div className="card--text">
        <p>{el.title}</p>
      </div>
      <div className="card--btns">
        <button className="card--btns--del" onClick={() => deleteMovies(el.id)}>
          <DeleteIcon />
        </button>
        <button
          className="card--btns--edit"
          onClick={() => navigate(`/edit/${el.id}`)}
        >
          <EditNoteIcon />
        </button>
        <button
          className="card--btns--play"
          onClick={() => navigate(`/player/${el.id}`)}
        >
          <PlayCircleIcon />
        </button>
        <button onClick={() => navigate(`/select/${el.id}`)}>
          <BsHeartFill style={{ fontSize: "18px" }} />
        </button>
      </div>
    </div>
  );
};

export default MoviesCard;

{
  /* <div className="cards--card">
  <img src={el.image} alt="moviesIMG" />
  <div>
    <h5>{el.title}</h5>
    <h5>{el.descr}</h5>
  </div>

  <div>
    <button onClick={() => deleteMovies(el.id)}>
      <DeleteIcon />
    </button>
    <button onClick={() => navigate(`/edit/${el.id}`)}>
      <EditNoteIcon />
    </button>
    <button onClick={() => navigate(`/player/${el.id}`)}>
      <PlayCircleIcon />
    </button>
  </div>
</div>; */
}
