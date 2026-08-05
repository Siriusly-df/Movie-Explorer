const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export async function apiClient(endpoint, options = {}){
    const url = new URL(`${BASE_URL}${endpoint}`);

    url.searchParams.append('api_key', API_KEY);
    url.searchParams.append('language', 'ua-UA');

    const response = await fetch(url, options);

    if(!response.ok) {
        throw new Error("Error loading data");
    }

    return response.json();
};

export const getMovies = async (page = 1) => {
  return apiClient(`/movie/popular?page=${page}`);
};

export const searchMovies = async (query, page = 1) => {
    return apiClient(`/search/movie?query=${encodeURIComponent(query)}&page=${page}`);
}

export const getMovieById = async (id) => {
    return apiClient(`/movie/${id}`)
}