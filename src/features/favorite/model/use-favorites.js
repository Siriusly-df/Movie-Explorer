import { 
    getFavorites, 
    addFavorite as addFavoriteStorage,
    removeFavorite as removeFavoriteStorage 
} from "../../../shared/lib/favorites";
import { useState, useEffect } from "react";

export function useFavorites(movieId) {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        setFavorites(getFavorites());
    }, []);

    const addFavorite = (movie) => {
        addFavoriteStorage(movie);
        setFavorites(getFavorites());
    };

    const removeFavorite = (movieId) => {
        removeFavoriteStorage(movieId);
        setFavorites(getFavorites());
    };

    const isFavorite = favorites.some(
        (movie) => movie.id === movieId
    );

    return {
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
    };
}