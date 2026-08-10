import { useFavorites } from "../../model/use-favorites" 
import { Button } from "../../../../shared/ui/button";

export function FavoriteButton({movie, className = ""}) {
    const { isFavorite, addFavorite, removeFavorite } = useFavorites(movie.id);

    const handleClick = (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (isFavorite) {
            removeFavorite(movie.id);
        } else {
            addFavorite(movie.id);
        }
    };

    return (
        <Button 
            type="button" 
            onClick={handleClick}
            className={className}
        >
        {isFavorite ? "❤️" : "🤍"}
        </Button>
    )
}