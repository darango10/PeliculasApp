import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import { Movie, MovieDBNowPlaying } from "../interfaces/movieInterface";

export const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  

  const getMovies = async () => {
    const response = await movieDB.get<MovieDBNowPlaying>("/now_playing");
    setMovies(response.data.results);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    movies,
    loading
  };
};
