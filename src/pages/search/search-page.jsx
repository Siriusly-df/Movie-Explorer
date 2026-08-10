import { Link, useSearchParams } from "react-router-dom";
import { useSearchMovies } from "../../entities/movie/api/use-search-movies";
import { Loader } from "../../shared/ui/loader/loader";
import { ErrorMessage } from "../../shared/ui/error-message/error-message";
import { MovieCard } from "../../entities/movie/ui/movie-card/movie-card";
import { Pagination } from '../../shared/ui/pagination/pagination';
import { useEffect } from "react";
import "./search-page.scss";

export function SearchPage () {
    const [searchParams, setSearchParams] = useSearchParams();
    const page = Number(searchParams.get("page")) || 1;
    const query = searchParams.get("query");
    const { data, isLoading, error } = useSearchMovies(query, page);

    useEffect(() => {
       window.scrollTo(0, 0);
    }, [page]);

    const totalPages = data?.total_pages || 1;

    const handleNext = () => {
        if (page < totalPages) {
            setSearchParams({
                query,
                page: page + 1,
            });
        }
    };

    const handlePrevious = () => {
        if (page > 1) {
            setSearchParams({
                query,
                page: page - 1,
            });
        }
    };

    
    if (isLoading) return <Loader />;
    if (error) return <ErrorMessage message="Failed to fetch movies." />;

    return (
        <div className="search-page">
        <h1>Search: {query}</h1>
        <div className="movie-grid">
        {data?.results?.length === 0 && (
            <p>No movies found</p>
        )}
        {data?.results?.map((movie) => (
            <MovieCard
                key={movie.id}
                movie={movie}
            />
        ))}
        </div>
        <Pagination 
            className="profile-pagination"
            page={page}
            totalPages={totalPages}
            onNext={handleNext}
            onPrevious={handlePrevious}
        />
    </div>
    )
}