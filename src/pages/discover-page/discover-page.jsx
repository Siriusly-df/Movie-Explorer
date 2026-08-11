import { MovieFilters } from "../../features/movie-filters/ui/movie-filters";
import { useState } from "react";
import { useDiscoverMovies } from '../../entities/movie/api/use-discover-movies';
import { MovieCard } from '../../entities/movie/ui/movie-card/movie-card';
import "./discover-page.scss";

export function DiscoverPage() {
    const [filters, setFilters] = useState(null);
    const [page, setPage] = useState(1);

    const discoverQuery = useDiscoverMovies(filters, page);

    const handleFiltersSubmit = (filters) => {
        console.log(filters);
    };

    return (
        <div className="discover-page">
            <h1 className="discover-page__title">Discover Movies</h1>
            <MovieFilters
                onSubmit={(values) => {
                    setFilters(values);
                    setPage(1);
                }}
            />
            <div className="discover-page__results">
            {discoverQuery.data?.results?.map((movie) => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                />
            ))}
            </div>
        </div>
    );
}