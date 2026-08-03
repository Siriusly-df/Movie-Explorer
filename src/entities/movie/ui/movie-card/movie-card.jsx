import { getImageUrl } from "@/shared/lib/get-image-url";
import './movie-card.scss';

export function MovieCard({ movie }) {
    return (
        <article className="movie-card">
            <div className="movie-card__image-wrapper">
                <img className="movie-card__image" src={getImageUrl(movie.poster_path)} alt={movie.title} />
                <p className="movie-card__rating">Rating: {movie.vote_average.toFixed(1)}</p>
            </div>
            <div className="movie-card__content">
                <h2 className="movie-card__title">{movie.title}</h2>
                <p className="movie-card__release-date">{movie.release_date}</p>
            </div>
        </article>
    )
}