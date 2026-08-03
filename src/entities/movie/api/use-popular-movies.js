import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../../../shared/api/movie-api";

export function usePopularMovies() {
  return useQuery({
    queryKey: ["popular-movies"],
    queryFn: getMovies,
  });
}