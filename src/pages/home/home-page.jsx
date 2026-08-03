import { usePopularMovies } from '../../entities/movie/api/use-popular-movies';
import { MovieCard } from '../../entities/movie/ui/movie-card/movie-card';
import { Loader } from '../../shared/ui/loader/loader';
import { ErrorMessage } from '../../shared/ui/error-message/error-message';

import './home-page.scss';


export function HomePage() {
  const { data, isLoading, isError } = usePopularMovies();

  if (isLoading) return <Loader />;
  if (isError) return <ErrorMessage message="Failed to fetch popular movies." />;

    return (
        <div className="home-page">
            <h1>Home Page</h1>
            <div className="movie-grid">
                {data.results.map((movie) => (
                    <MovieCard 
                        key={movie.id} 
                        movie={movie} 
                    />
                ))}
            </div>
        </div>
    )
}