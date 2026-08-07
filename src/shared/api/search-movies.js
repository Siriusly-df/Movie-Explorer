import { apiClient } from "./api-сlient";

export const searchMovies = async (query, page = 1) => {
    return apiClient(`/search/movie?query=${encodeURIComponent(query)}&page=${page}`);
}
