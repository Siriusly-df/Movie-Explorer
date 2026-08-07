const FAVORITES_KEY = "favorite-movies";

export function getFavorites() {
    return JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
}

export function addFavorite(movie) {
    const favorites = getFavorites();

    if (favorites.some((item) => item.id === movie.id)) {
        return
    }

    localStorage.setItem(
        FAVORITES_KEY,
        JSON.stringify([...favorites, movie])
    )
}

export function removeFavorite(movieId) {
   const favorites = getFavorites(); 

    localStorage.setItem(
        FAVORITES_KEY,
        JSON.stringify(
            favorites.filter((movie) => movie.id !== movieId)
        )
    );
}

export function isFavorite(moveId) {
    const favorites = getFavorites(); 

    return favorites.some((movie) => movie.id === moveId)
}