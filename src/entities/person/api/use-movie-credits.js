import { useQuery } from "@tanstack/react-query"
import { getMovieCredits } from "../../../shared/api/movie-api"

export function useMovieCredits (id) {
    return useQuery ({
        queryKey: ["movie-credits", id],
        queryFn: () => getMovieCredits(id),
        enabled: !!id,
    })
}