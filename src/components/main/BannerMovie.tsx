"use client";
import React, { useEffect, useState } from "react";
import "./BannerMovieStyles.css";
import { getPopularMovies } from "@/lib/api";
import BannerMovieRandom from "./BannerMovieRandom";
const BannerMovie = () => {
  const [movies, setMovies] = useState([]); // Estado inicial vacío

  const fetchMovies = async () => {
    try {
      const popularMovies = await getPopularMovies(); // Llama a la API
      setMovies(popularMovies); // Actualiza el estado con las películas
    } catch (error) {
      console.error("Error al obtener las películas populares:", error);
    }
  };

  // Llama a fetchMovies una vez cuando el componente se monta
  useEffect(() => {
    fetchMovies();
  }, []);

  // Nuevo useEffect para observar los cambios en `movies`
  useEffect(() => {
    console.log("Películas en banner:", movies);
  }, [movies]);

  return (
    <>
      <BannerMovieRandom movies={movies} />
    </>
  );
};

export default BannerMovie;
