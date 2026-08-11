import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../../../shared/api/movie-api";

export function usePopularMovies(page = 1, sort = "popularity.desc") {
    return useQuery({
        queryKey: ["popular-movies", page, sort],
        queryFn: () => getMovies(page, sort),
    });
}