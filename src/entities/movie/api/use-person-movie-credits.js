import { useQuery } from "@tanstack/react-query";
import { getPersonMovieCredits } from "../../../shared/api/person-api";

export function usePersonMovieCredits(id) {
    return useQuery({
        queryKey: ["person-movie-credits", id],
        queryFn: () => getPersonMovieCredits(id),
        enabled: !!id,
    });
}