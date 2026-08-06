import { useQuery } from "@tanstack/react-query";
import { getSimilarMovies } from "../../../shared/api/movie-api"; 

export function useSimilarMovies (id) {
    return useQuery({
        queryKey: ["similar-movies", id],
        queryFn: () => getSimilarMovies(id),
        enabled: !!id,
    })
}