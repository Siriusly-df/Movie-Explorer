import { usePopularMovies } from '../../entities/movie/api/use-popular-movies';
import { MovieCard } from '../../entities/movie/ui/movie-card/movie-card';
import { Loader } from '../../shared/ui/loader/loader';
import { ErrorMessage } from '../../shared/ui/error-message/error-message';
import { useSearch } from '../../features/search-movies/model/search-context';
import { useSearchMovies } from '../../entities/movie/api/use-search-movies';
import { useDebounce } from '../../shared/hooks/use-debounce';
import { useEffect, useState } from 'react';
import { Pagination } from '../../shared/ui/pagination/pagination';
import './home-page.scss';
import { Link } from 'react-router-dom';

export function HomePage() {
  const [page, setPage] = useState(1);
  const { search } = useSearch();

  const searchValue = search.trim();
  const debouncedSearchValue = useDebounce(searchValue, 500);

  useEffect(() => { 
    setPage(1)
  }, [debouncedSearchValue]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);


  const popularQuery = usePopularMovies(page);
  const searchQuery = useSearchMovies(debouncedSearchValue, page);
  const isSearching = searchValue !== "";

  const query = isSearching 
    ? searchQuery
    : popularQuery;

  const movies = query.data;
  const isLoading = query.isLoading;
  const error = query.error;
  const totalPages = movies?.total_pages || 1;

  const handleNext= () => {
    if(page < totalPages) {
       setPage(prev => prev + 1);
    }
  }

  const handlePrevious = () => {
    if (page > 1) {
        setPage(prev => prev - 1);
    }
  };

  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage message="Failed to fetch movies." />;

  return (
        <div className="home-page">
            <h1>{isSearching ? `Search Results for "${searchValue}"` : "Popular Movies"}</h1>
            <div className="movie-grid">
                {movies?.results?.length === 0 && (
                    <p>No movies found</p>
                )}
                {movies?.results?.map((movie) => (
                  <Link key={movie.id} to={`/movie/${movie.id}`}>
                    <MovieCard 
                        movie={movie} 
                    />
                  </Link>
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