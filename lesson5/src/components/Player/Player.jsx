import React, { useEffect } from "react";
import { useMovies } from "../../context/MoviesContextProvider";
import { useParams } from "react-router-dom";
import "./Player.scss";

const Player = () => {
  const { oneMovies, getOneMovies } = useMovies();
  const { id } = useParams();

  useEffect(() => {
    getOneMovies(id);
  }, []);

  console.log(oneMovies);
  return (
    <div className="player">
      <div className="player--cart">
        <div className="player--cart--iframe">
          <iframe
            style={{ width: "100%", height: "90vh" }}
            src={oneMovies.video}
            loading="lazy"
            frameBorder="0"
            scrolling="no"
            allowFullScreen="allowFullScreen"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Player;
