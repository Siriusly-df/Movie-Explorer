import { MovieFilters } from "../../features/movie-filters/ui/movie-filters";
import { useState } from "react";
import { useDiscoverMovies } from '../../entities/movie/api/use-discover-movies';
import { MovieCard } from '../../entities/movie/ui/movie-card/movie-card';
import "./discover-page.scss";

export function DiscoverPage() {
    const [filters, setFilters] = useState(null);

    const discoverQuery = useDiscoverMovies(filters);

    return (
        <div className="discover-page">
            <h1 className="discover-page__title">Discover Movies</h1>
            <MovieFilters
                onSubmit={(values) => {
                    setFilters(values);
                }}
            />
            <div className="discover-page__results">
            {discoverQuery.data?.pages?.flatMap((page) => page.results)
                .map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                    />
                ))}
            </div>
            {discoverQuery.hasNextPage && (
                <button
                    className="discover-page__load-more"
                    type="button"
                    onClick={() => discoverQuery.fetchNextPage()}
                    disabled={discoverQuery.isFetchingNextPage}
                >
                    {discoverQuery.isFetchingNextPage
                        ? "Loading..."
                        : "Load More"}
                </button>
            )}
        </div>
    );
}