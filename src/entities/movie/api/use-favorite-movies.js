import { useQueries } from "@tanstack/react-query";
import { getFavorites } from "../../../shared/lib/favorites";
import { getMovieById } from "../../../shared/api/movie-api";

export function useFavoriteMovies() {
    const favorites = getFavorites();

    const queries = useQueries({
        queries: favorites.map((id) => ({
            queryKey: ["movie", id],
            queryFn: () => getMovieById(id),
            enabled: !!id,
        })),
    });

    return queries;
}