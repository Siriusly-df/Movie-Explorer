const FAVORITES_KEY = "favorite-movies";

export function getFavorites() {
    return JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
}

export function addFavorite(movieId) {
    const favorites = getFavorites();

    if (favorites.includes(movieId)) {
        return;
    }

    localStorage.setItem(
        FAVORITES_KEY,
        JSON.stringify([...favorites, movieId])
    );
}

export function removeFavorite(movieId) {
    const favorites = getFavorites();

    localStorage.setItem(
        FAVORITES_KEY,
        JSON.stringify(
            favorites.filter((id) => id !== movieId)
        )
    );
}