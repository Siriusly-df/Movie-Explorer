import { apiClient } from "./api-сlient";

export async function getMovies(page = 1, sort = "popularity.desc") {
    const params = new URLSearchParams({
        page: String(page),
        sort_by: sort,
    });

    return apiClient(`/discover/movie?${params}`);
}

export const getMovieById = async (id) => {
    return apiClient(`/movie/${id}`)
}

export const getMovieCredits = async (id) => {
    return apiClient(`/movie/${id}/credits`)
}

export const getSimilarMovies = async (id) => {
    return apiClient(`/movie/${id}/similar`)
}

export async function getUpcomingMovies(page = 1) {
    return apiClient(`/movie/upcoming?page=${page}`);
}

export async function getDiscoverMovies(filters = {}, page = 1) {
    const params = new URLSearchParams({
        page: String(page),
    });

    if (filters.year) {
        params.append("primary_release_year", filters.year);
    }

    if (filters.rating) {
        params.append("vote_average.gte", filters.rating);
    }

    if (filters.genre) {
        params.append("with_genres", filters.genre);
    }

    return apiClient(`/discover/movie?${params.toString()}`);
}