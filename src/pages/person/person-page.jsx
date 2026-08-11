import { usePerson } from "../../entities/movie/api/use-person";
import { getImageUrl } from "@/shared/lib/get-image-url";
import { Loader } from "../../shared/ui/loader/loader";
import { ErrorMessage } from "../../shared/ui/error-message/error-message";
import { useParams } from "react-router-dom";
import { usePersonMovieCredits } from "../../entities/movie/api/use-person-movie-credits";
import { MovieCard } from "../../entities/movie/ui/movie-card/movie-card";
import { BackButton } from "../../shared/ui/back-button/back-button";
import "./person-page.scss";

export function PersonPage () {
    const { id } = useParams();
    const { data: person, isLoading, error, } = usePerson(id);
    const { data: movie } = usePersonMovieCredits(id);

    if (isLoading) return <Loader />;
    if (error) return <ErrorMessage message="Failed to load person."/>;

    return (
      <div className="person-page">
        <BackButton className="person-page__back-button" />
        <div className="person-page__header">
            <img
                className="person-page__image"
                src={getImageUrl(person.profile_path)}
                alt={person.name || "—"}
            />
            <div className="person-page__info">
            <h1 className="person-page__name">{person.name || "—"}</h1>
            <p className="person-page__birthday">
            <strong>Birthday:</strong> {person.birthday || "—"}
            </p>
            <p className="person-page__deathday">
            <strong>Death day:</strong> {person.deathday || "—"}
            </p>
            <p className="person-page__place">
            <strong>Place of birth:</strong> {person.place_of_birth || "—"}
            </p>
            <p className="person-page__known-for">
            <strong>Known for:</strong> {person.known_for_department || "—"}
            </p>
            <p className="person-page__popularity">
            <strong>Popularity:</strong> {person.popularity.toFixed(1) || "—"}
            </p>
         </div>
        </div>
        <div className="person-page__biography">
            <h2 className="person-page__biography-title">Biography</h2>
            <p className="person-page__biography-text">{person.biography || "—"}</p>
        </div>
        <div className="person-page__movies">
            <h2 className="person-page__movies-title">Known For</h2>
            <div className="person-page__movies-grid movie-grid">
               {movie?.cast?.slice(0,21).map((movie) => (
                <MovieCard
                   key={movie.id}
                   movie={movie}
                />
               ))}
            </div>
        </div>
    </div>
    )
}