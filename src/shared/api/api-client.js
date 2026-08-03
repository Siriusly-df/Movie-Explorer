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

