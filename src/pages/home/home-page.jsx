import { usePopularMovies } from '../../entities/movie/api/use-popular-movies';
import { MovieCard } from '../../entities/movie/ui/movie-card/movie-card';
import { Loader } from '../../shared/ui/loader/loader';
import { ErrorMessage } from '../../shared/ui/error-message/error-message';
import { useEffect, useState } from 'react';
import { Pagination } from '../../shared/ui/pagination/pagination';
import { MovieSort } from '../../features/movie-sort/ui/movie-sort';
import './home-page.scss';

export function HomePage() {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("popularity.desc");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const popularQuery = usePopularMovies(page, sort);

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
          <MovieSort
              sort={sort}
              onChange={(value) => {
                  setSort(value);
                  setPage(1);
              }}
          />
            <div className="movie-grid">
              {movies?.results?.length === 0 ? (
                    <p>No movies found</p>
                ) : (
                    movies?.results?.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            movie={movie}
                        />
                    ))
              )}
            </div>
            <Pagination 
              className="home-page__pagination"
              page={page}
              totalPages={totalPages}
              onNext={handleNext}
              onPrevious={handlePrevious}
            />
        </div>
    )
}