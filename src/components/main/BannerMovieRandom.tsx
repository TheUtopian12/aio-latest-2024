"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Loader from "../ui/Loader";

interface Movie {
  id: number;
  title: string;
  poster: string;
  original_title: string;
  poster_path: string;
  release_date: string;
  first_air_date: string;
  original_name: string;
  media_type: string;
}

const BannerMovieRandom = ({ movies }: { movies: Movie[] }) => {
  const maxIndex = movies.length;
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [movieList, setMovieList] = useState<Movie[]>([]);

  useEffect(() => {
    setMovieList(movies || []); // Asegúrate de que sea un array
  }, [movies]); // Agregado 'movies' como dependencia

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % maxIndex);
    }, 10000);
    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <>
      {movieList[0] ? (
        <div className="flex relative items-center justify-center transition-all">
          <Image
            src={`https://image.tmdb.org/t/p/original${movieList[currentIndex]?.poster_path}`}
            width={9000}
            height={9000}
            quality={100}
            placeholder="empty"
            priority
            className="max-w-full h-[800px] opacity-65 "
            alt="Imagen de la película"
            style={{ objectFit: "cover" }}
          />
          <div className="flex justify-center items-center absolute bottom-44 space-x-4 text-white font-extrabold">
            <span>
              {movieList.length > 0 ? (
                movieList[currentIndex]?.original_title ||
                movieList[currentIndex]?.original_name
              ) : (
                <Loader />
              )}
            </span>
          </div>
          <div className="flex justify-center items-center absolute bottom-36 space-x-4 text-white font-extrabold">
            <span>
              {movieList.length > 0 ? (
                movieList[currentIndex]?.release_date ||
                movieList[currentIndex]?.first_air_date
              ) : (
                <Loader />
              )}
            </span>
            <span>
              {movieList.length > 0 ? (
                movieList[currentIndex]?.media_type.toUpperCase()
              ) : (
                <Loader />
              )}
            </span>
          </div>
          <div className="flex justify-center items-center absolute bottom-20 space-x-4">
            <button className="flex items-center justify-center rounded-full h-10 w-10 bg-gray-500 hover:bg-orange-600">
              <span className="text-xl text-white">+</span>
            </button>
            <button className="button-with-icon">
              <svg
                className="icon"
                id="Play"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="color000000 svgShape"
                  fill="#000000FF"
                  d="M12 39c-.549 0-1.095-.15-1.578-.447A3.008 3.008 0 0 1 9 36V12c0-1.041.54-2.007 1.422-2.553a3.014 3.014 0 0 1 2.919-.132l24 12a3.003 3.003 0 0 1 0 5.37l-24 12c-.42.21-.885.315-1.341.315z"
                ></path>
              </svg>
              <span className="text text-black">Play</span>
            </button>

            <Link
              href={`/media/${movieList[currentIndex]?.id}`}
              className="flex items-center justify-center rounded-full h-10 w-10 bg-gray-500 hover:bg-orange-600 "
            >
              <span className="text-xl text-white flex">i</span>
            </Link>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default BannerMovieRandom;
