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
import { BackButton } from "../../shared/ui/back-button/back-button";
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
        <BackButton className="movie-page__back-button" />
        <div className="movie-page__header">
        <div className="movie-page__image-wrapper">
            <img
                className="movie-page__image"
                src={getImageUrl(movie.poster_path)}
                alt={movie.title}
            />
            <FavoriteButton movie={movie} className="movie-page__favorite"/>
        </div>
            <div className="movie-page__info">
                <h1 className="movie-page__title">{movie.title || "—"}</h1>
                <p className="movie-page__average">Average: {movie.vote_average.toFixed(1) || "—"}</p>
                <p className="movie-page__release-date">Release date: {movie.release_date || "—"}</p>
            <div className="movie-page__runtime-block">
                <p className="movie-page__runtime-title">Runtime:</p>
                <p className="movie-page__runtime">
                    {movie.runtime || "—"} min
                </p>
            </div>

            <div className="movie-page__countries">
                <p className="movie-page__countries-title">Countries:</p>
                {movie.production_countries?.length ? (
                    movie.production_countries.map((country) => (
                        <span
                            key={country.iso_3166_1}
                            className="movie-page__country"
                        >
                            {country.name}
                        </span>
                    ))
                ) : (
                    <p className="movie-page__country">
                        —
                    </p>
                )}
            </div>
            <div className="movie-page__genres">
                <p className="movie-page__genres-title">Genres:</p>
                {movie.genres?.length ? (
                    movie.genres.map((genre) => (
                        <span
                            key={genre.id}
                            className="movie-page__genre"
                        >
                            {genre.name}
                        </span>
                    ))
                ) : (
                    <p className="movie-page__genre">—</p>
                )}
            </div>
            </div>
        </div>
        <div className="movie-page__description">
            <h2>Overview</h2>
            <p className="movie-page__overview">{movie.overview || "—"}</p>
        </div>
          <h2 className="movie-page__actors-title">Cast</h2>
            <div className="movie-page__credits">
                {actor?.cast?.slice(0, 10).map((actor) => (
                    <ActorCard key={actor.id} actor={actor} />
                ))}
            </div>
            <h2 className="movie-page__similar-title">Similar Movies</h2>
            <div className="movie-page__similar movie-grid">
                {similarMovies?.results?.length ? (
                    similarMovies.results
                        .slice(0, 6)
                        .map((movie) => (
                            <MovieCard
                                key={movie.id}
                                movie={movie}
                            />
                        ))
                ) : (
                    <p>No similar movies found.</p>
                )}
            </div>
        </div>
    )
}