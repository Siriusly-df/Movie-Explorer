import { apiClient } from "./api-сlient";

export const getPersonById = async (id) => {
    return apiClient(`/person/${id}`) 
}

export const getPersonMovieCredits = async (id) => {
    return apiClient(`/person/${id}/movie_credits`);
};