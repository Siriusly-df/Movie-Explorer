import { useParams } from "react-router-dom"
import { useMovie } from "../../entities/movie/api/use-movie"
import { Loader } from "../../shared/ui/loader/loader";
import { ErrorMessage } from "../../shared/ui/error-message/error-message";
import { getImageUrl } from "@/shared/lib/get-image-url";
import "./movie-page.scss"

export function MoviePage({ }) {
    const { id } = useParams();
    const movieQuery = useMovie(id);
    const { data: movie, isLoading, error,} = useMovie(id);

    if (isLoading) return <Loader />;
    if (error) return <ErrorMessage message="Failed to load movie."/>;

    return (
        <div className="movie-page">
        <div className="movie-page__header">
            <img className="movie-page__image" 
            src={getImageUrl(movie.poster_path)}
            alt={movie.title}
            />
            <div className="movie-page__info">
            <h1 className="movie-page__title">{movie.title}</h1>
            <p className="movie-page__average">{movie.vote_average.toFixed(1)}</p>
            <p className="movie-page__release-date">{movie.release_date}</p>
            <div className="movie-page__genres">
                {movie.genres.map((genre) => (
                <span key={genre.id} className="movie-page__genre"
                >{genre.name}</span>
                ))}
            </div>
            </div>
        </div>
        <div className="movie-page__description">
            <h2>Overview</h2>
            <p className="movie-page__overview">{movie.overview}</p>
        </div>
        </div>
    )
}