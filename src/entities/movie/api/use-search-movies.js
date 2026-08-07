import { useQuery } from "@tanstack/react-query";
import { searchMovies } from "../../../shared/api/search-movies"; 

export function useSearchMovies(query, page = 1) {
    return useQuery({
        queryKey: ["search-movies", query, page],
        queryFn: () => searchMovies(query, page),
        enabled: query.trim() !== ""  
    })
}