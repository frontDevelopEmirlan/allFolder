import React, { useEffect } from "react";
import { useMovies } from "../../context/MoviesContextProvider";
import "./ListProduct.scss";

import MoviesCard from "../MoviesCard/MoviesCard";
const ListProduct = () => {
  const { readMovies, data } = useMovies();

  useEffect(() => {
    readMovies();
  });

  return (
    <div className="cards">
      {data.map((el) => (
        <MoviesCard key={el.id} el={el} />
      ))}
    </div>
  );
};

export default ListProduct;
