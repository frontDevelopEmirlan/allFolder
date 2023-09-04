import React, { createContext, useContext, useState } from "react";
import axios from "axios";

export const moviesContext = createContext();
export const useMovies = () => {
  return useContext(moviesContext);
};

const MoviesContextProvider = ({ children }) => {
  const API = "http://localhost:3000/products";

  const [data, setData] = useState([]);
  const [oneMovies, setOneMovies] = useState([]);
  //! POST
  async function addMovies(newMovies) {
    await axios.post(API, newMovies);
  }
  //! GET
  async function readMovies() {
    let { data } = await axios(API);
    setData(data);
  }
  //! DELETE
  async function deleteMovies(id) {
    await axios.delete(`${API}/${id}`);
    readMovies();
  }

  //! GET ONE MOVIES
  async function getOneMovies(id) {
    let { data } = await axios(`${API}/${id}`);
    setOneMovies(data);
  }
  //! UPDATE MOVIES
  async function editMovies(id, editedMovies) {
    await axios.patch(`${API}/${id}`, editedMovies);
    readMovies();
  }

  const values = {
    addMovies,
    readMovies,
    data,
    deleteMovies,
    getOneMovies,
    editMovies,
    oneMovies,
  };

  return (
    <moviesContext.Provider value={values}>{children}</moviesContext.Provider>
  );
};

export default MoviesContextProvider;
