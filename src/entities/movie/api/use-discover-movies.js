import { useInfiniteQuery } from "@tanstack/react-query";
import { getDiscoverMovies } from "../../../shared/api/movie-api";

export function useDiscoverMovies(filters) {
    return useInfiniteQuery({
        queryKey: ["discover-movies", filters],
        queryFn: ({ pageParam = 1 }) =>
            getDiscoverMovies(filters, pageParam),
        initialPageParam: 1,

        getNextPageParam: (lastPage, allPages) => {
            if (allPages.length >= lastPage.total_pages) {
                return undefined;
            }
            return allPages.length + 1;
        },
        enabled: !!filters,
    });
}

