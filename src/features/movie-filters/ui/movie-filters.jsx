import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { movieFiltersSchema } from "../model/movie-filters-schema";
import "./movie-filters.scss";

export function MovieFilters ({ onSubmit }) {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: zodResolver(movieFiltersSchema),
        defaultValues: {
            years: "",
            rating: "",
            genre: "",
        },
    });
    return(
      <form
        className="movie-filters"
        onSubmit={handleSubmit(onSubmit)}
      >
      <div className="movie-filters__field">
        <label className="movie-filters__label" htmlFor="movie-year">Year</label>
        <input 
            id="movie-year"
            type="text" 
            className="movie-filters__input"
            type="text"
            placeholder="2025"
            {...register("year")}
        />
        {errors.years && (
            <p className="movie-filters__error">
              {errors.year.message}
            </p>
        )}
      </div>
      <div className="movie-filters__field">
          <label 
             className="movie-filters__label"
             htmlFor="movie-rating"
            >Minimum rating</label>
            <input
                id="movie-rating"
                className="movie-filters__input"
                type="number"
                min="0"
                max="10"
                step="0.1"
                placeholder="7.0"
                {...register("rating")}
            />
            {errors.rating && (
                <p className="movie-filters__error">
                    {errors.rating.message}
                </p>
            )}
      </div>
      <div className="movie-filters__field">
        <label  
           className="movie-filters__label" 
           htmlFor="movie-genre"
        >Genre</label>
        <select
            id="movie-genre"
            className="movie-filters__select"
            {...register("genre")}
        >
            <option value="">All genres</option>
            <option value="28">Action</option>
            <option value="12">Adventure</option>
            <option value="35">Comedy</option>
            <option value="18">Drama</option>
            <option value="27">Horror</option>
            <option value="878">Science Fiction</option>
        </select>
        </div>
        <button
            className="movie-filters__submit"
            type="submit"
        >Apply filters</button>
      </form>
    )
}