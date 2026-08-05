import { useQuery } from "@tanstack/react-query"
import { getMovieById } from "../../../shared/api/movie-api"

export function useMovie(id) {
    return useQuery({
     queryKey: ["movie", id],
     queryFn: () => getMovieById(id),
     enabled: !!id,
    })
}

