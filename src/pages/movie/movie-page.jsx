import { Link, useParams } from "react-router-dom";
import { useMovie } from "../../entities/movie/api/use-movie";
import { useSimilarMovies } from "../../entities/movie/api/use-similar-movies";
import { useMovieCredits } from "../../entities/person/api/use-movie-credits";
import { MovieCard } from "../../entities/movie/ui/movie-card/movie-card";
import { ActorCard } from "../../entities/person/ui/actor-card/actor-card";
import { FavoriteButton } from "../../features/favorite/ui/favorite-button/favorite-button";
import { Loader } from "../../shared/ui/loader/loader";
import { ErrorMessage } from "../../shared/ui/error-message/error-message";
import { getImageUrl } from "@/shared/lib/get-image-url";
import "./movie-page.scss";

export function MoviePage() {
    const { id } = useParams();

    const { data: movie, isLoading, error,} = useMovie(id);
    const { data: actor } = useMovieCredits(id);
    const { data: similarMovies } = useSimilarMovies(id);

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
                <FavoriteButton movie={movie}/>
                <p className="movie-page__average">Average: {movie.vote_average.toFixed(1)}</p>
                <p className="movie-page__release-date">Release date: {movie.release_date}</p>
            <div className="movie-page__runtime-block">
                <p className="movie-page__runtime-title">Runtime:</p>
                <p className="movie-page__runtime">
                    {movie.runtime} min
                </p>
            </div>

            <div className="movie-page__countries">
                <p className="movie-page__countries-title">Countries:</p>
                {movie.production_countries.map((country) => (
                    <span
                        key={country.iso_3166_1}
                        className="movie-page__country"
                    >
                        {country.name}
                    </span>
                ))}
            </div>
            <div className="movie-page__genres">
                <p className="movie-page__genres-title">Genres:</p>
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
          <h2 className="movie-page__actors-title">Cast</h2>
            <div className="movie-page__credits">
                {actor?.cast?.slice(0, 10).map((actor) => (
                <Link  key={actor.id}  to={`/actor/${actor.id}`}>
                <ActorCard actor={actor} />
                </Link>
                ))}
            </div>
            <h2 className="movie-page__similar-title">Similar Movies</h2>
            <div className="movie-page__similar">
                {similarMovies?.results?.slice(0, 6).map((movie) => (
                <Link key={movie.id} to={`/movie/${movie.id}`}>
                    <MovieCard movie={movie} />
                </Link>
                ))}
            </div>
        </div>
    )
}