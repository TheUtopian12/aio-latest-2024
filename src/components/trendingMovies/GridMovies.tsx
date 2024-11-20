"use client";

import { useEffect, useState } from "react";
import { getPopularMovies, movieByGender } from "@/lib/api";
import { CardMovie } from "../main/CardMovie";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { usePathname } from "next/navigation";

export default function GridMovies({
  param,
}: {
  param: { categoryId: string };
}) {
  const route = usePathname();
  console.log(route);
  const [movies, setMovies] = useState([]); // Estado inicial vacío
  const { categoryId } = param;
  const fetchMovies = async () => {
    try {
      if (route === "/trending-movies") {
        const popularMovies = await getPopularMovies(); // Llama a la API
        setMovies(popularMovies);
      } else {
        const popularMovies = await movieByGender(Number(categoryId)); // Llama a la API
        setMovies(popularMovies);
      }

      // Actualiza el estado con las películas
    } catch (error) {
      console.error("Error al obtener las películas populares:", error);
    }
  };

  // Llama a fetchMovies una vez cuando el componente se monta
  useEffect(() => {
    fetchMovies();
  }, []);

  // Se ejecuta cuando cambia el valor de `movies`

  return (
    <div className="p-10 px-2">
      <Link
        href={"/main"}
        className="flex items-center pt-10 px-10 space-x-4 text-center sm:text-left"
      >
        <button className="text-white">

          <FaArrowLeft className="hover:text-red-500" size={28} />{" "}
        </button>
      </Link>
      <div
        className="px-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 whitespace-nowrap 
                    overflow-x-scroll no-scrollbar md:gap-9 lg:gap-10 justify-items-center
                    
                    
                    "
      >
        {movies.map(
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
