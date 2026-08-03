import { apiClient } from './api-client';

export const getMovies = async (page = 1) => {
    return apiClient(`/movie/popular`);
}

