"use client";

import { useEffect, useState } from "react";
import "./BannerMovieStyles.css";
import { movieById } from "@/lib/api";
import BannerComponentDetails from "./BannerComponentDetails";
import Loader from "../ui/Loader";

interface PropsMovie {
  title: string;
  poster_path: string;
  vote_average: number;
  backdrop_path: string;
  release_date: string;
  overview: string;
  genres: string[];
}

const BannerComponent = ({ mediaId }: { mediaId: string }) => {
  const [movieData, setMovieData] = useState<PropsMovie>();

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const data = await movieById(mediaId);
        setMovieData(data);
      } catch (error) {
        console.error("Error al obtener los datos de la película:", error);
      }
    };

    fetchMovieData();
  });
  return (
    <>
      {movieData ? (
        <BannerComponentDetails
          title={movieData.title}
          genres={movieData.genres}
          overview={movieData.overview}
          poster_path={movieData.backdrop_path}
          release_date={movieData.release_date}
          vote_average={movieData.vote_average}
        />
      ) : (
        <Loader />
      )}
    </>
  );
};

export default BannerComponent;
