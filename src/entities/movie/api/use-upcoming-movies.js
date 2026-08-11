import { useQuery } from "@tanstack/react-query";
import { getUpcomingMovies } from "../../../shared/api/movie-api";

export function useUpcomingMovies(page = 1) {
    return useQuery({
        queryKey: ["upcoming-movies", page],
        queryFn: () => getUpcomingMovies(page),
    });
}