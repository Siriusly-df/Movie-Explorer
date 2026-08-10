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

    const addFavorite = (movieId) => {
        addFavoriteStorage(movieId);
        setFavorites(getFavorites());
    };

    const removeFavorite = (movieId) => {
        removeFavoriteStorage(movieId);
        setFavorites(getFavorites());
    };

    const isFavorite = favorites.includes(movieId);

    return {
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
    };
}