import { useFavorites } from "../../model/use-favorites" 
import { Button } from "../../../../shared/ui/button";
import "./favorite-button.scss"

export function FavoriteButton({movie}) {
    const { isFavorite, addFavorite, removeFavorite } = useFavorites(movie.id);

    const handleClick = () => {
        if (isFavorite) {
            removeFavorite(movie.id);
        } else {
            addFavorite(movie);
        }
    }

    return (
        <Button 
            type="button" 
            onClick={handleClick}
        >
        {isFavorite ? "❤️" : "🤍"}
        </Button>
    )
}