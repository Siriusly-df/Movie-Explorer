import { usePopularMovies } from '../../entities/movie/api/use-popular-movies';
import { MovieCard } from '../../entities/movie/ui/movie-card/movie-card';
import { Loader } from '../../shared/ui/loader/loader';
import { ErrorMessage } from '../../shared/ui/error-message/error-message';
import { useEffect, useState } from 'react';
import { Pagination } from '../../shared/ui/pagination/pagination';
import './home-page.scss';
import { Link } from 'react-router-dom';

export function HomePage() {
  const [page, setPage] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const popularQuery = usePopularMovies(page);

  const movies = popularQuery.data;
  const isLoading = popularQuery.isLoading;
  const error = popularQuery.error;
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
            <h1>Popular Movies</h1>
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