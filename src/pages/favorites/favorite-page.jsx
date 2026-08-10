import { useFavoriteMovies } from "../../entities/movie/api/use-favorite-movies";
import { MovieCard } from "../../entities/movie/ui/movie-card/movie-card";
import { Loader } from "../../shared/ui/loader/loader";
import { ErrorMessage } from "../../shared/ui/error-message/error-message";
import "./favorite-page.scss"

export function FavoritesPage() {
    const movies = useFavoriteMovies();

    const isLoading = movies.some((query) => query.isLoading);
    const error = movies.find((query) => query.error)?.error;

    const favoriteMovies = movies
        .map((query) => query.data)
        .filter(Boolean);

    if (isLoading) return <Loader />;
    if (error) return <ErrorMessage message="Failed to load movies." />;

    return (
        <div className="favorite-page">
            <h1 className="favorite-page__title">Favorite Page</h1>

            {favoriteMovies.length === 0 ? (
                <p className="favorite-page__empty">
                    No favorite movies yet.
                </p>
            ) : (
                <div className="movie-grid">
                    {favoriteMovies.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            movie={movie}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}