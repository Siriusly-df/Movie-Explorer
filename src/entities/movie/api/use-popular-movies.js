import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../../../shared/api/movie-api";

export function usePopularMovies(page = 1) {
  return useQuery({
    queryKey: ["popular-movies", page],
    queryFn: () => getMovies(page),
  });
}