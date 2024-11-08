"use client";

import { useEffect, useState } from "react";
import { getPopularMovies } from "@/lib/api";
import { CardMovie } from "./CardMovie";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa6";

export default function MovieList() {
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
    console.log("Películas actualizadas:", movies);
  }, [movies]); // Se ejecuta cuando cambia el valor de `movies`
  return (
    <div className="px-4 md:px-12">
      <Link
        href={"/trending-movies"}
        className="pt-10 px-10 text-center sm:text-left"
      >
        <h1 className="text-xl text-white flex items-center gap-2">
          Trending Now{" "}
          <span>
            <FaArrowDown />
          </span>{" "}
        </h1>
        <span className="text-white">See all</span>
      </Link>
      <div
        className="flex whitespace-nowrap
                    overflow-x-scroll no-scrollbar gap-9"
      >
        {movies.slice(0, 10).map(
          (movie: {
            id: string;
            original_title: string;
            overview: string;
            vote_average: number;
            release_date: string;

            poster_path: string;
          }) => (
            <CardMovie key={movie.id} movie={movie} />
          ),
        )}
      </div>
    </div>
  );
}
