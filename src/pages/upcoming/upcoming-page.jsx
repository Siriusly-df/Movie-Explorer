import { useEffect, useState } from "react";
import { useUpcomingMovies } from "../../entities/movie/api/use-upcoming-movies";
import { MovieCard } from "../../entities/movie/ui/movie-card/movie-card";
import { Loader } from "../../shared/ui/loader/loader";
import { ErrorMessage } from "../../shared/ui/error-message/error-message";
import { Pagination } from "../../shared/ui/pagination/pagination";
import "./upcoming-page.scss";

export function UpcomingPage() {
    const [page, setPage] = useState(1);

    const upcomingQuery = useUpcomingMovies(page);

    const movies = upcomingQuery.data;
    const isLoading = upcomingQuery.isLoading;
    const error = upcomingQuery.error;
    const totalPages = movies?.total_pages || 1;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [page]);

    const handleNext = () => {
        if (page < totalPages) {
            setPage((prev) => prev + 1);
        }
    };

    const handlePrevious = () => {
        if (page > 1) {
            setPage((prev) => prev - 1);
        }
    };

    if (isLoading) return <Loader />;
    if (error) return <ErrorMessage message="Failed to fetch upcoming movies." />;
    
    return (
        <div className="upcoming-page">
            <h1 className="upcoming-page__title">Upcoming Movies</h1>
            {movies?.results?.length === 0 ? (
                <p className="upcoming-page__empty">
                    No upcoming movies found.
                </p>
            ) : (
                <div className="movie-grid">
                    {movies.results.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            movie={movie}
                        />
                    ))}
                </div>
            )}
            <Pagination
                className="upcoming-page__pagination"
                page={page}
                totalPages={totalPages}
                onNext={handleNext}
                onPrevious={handlePrevious}
            />
        </div>
    );
}