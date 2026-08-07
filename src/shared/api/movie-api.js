import { apiClient } from "./api-сlient";

export const getMovies = async (page = 1) => {
  return apiClient(`/movie/popular?page=${page}`);
};

export const getMovieById = async (id) => {
    return apiClient(`/movie/${id}`)
}

export const getMovieCredits = async (id) => {
    return apiClient(`/movie/${id}/credits`)
}

export const getSimilarMovies = async (id) => {
    return apiClient(`/movie/${id}/similar`)
}

