import { useQuery } from "@tanstack/react-query";
import { getDiscoverMovies } from "../../../shared/api/movie-api";

export function useDiscoverMovies(filters, page = 1) {
    return useQuery({
        queryKey: ["discover-movies", filters, page],
        queryFn: () => getDiscoverMovies(filters, page),
        enabled: !!filters,
    });
}