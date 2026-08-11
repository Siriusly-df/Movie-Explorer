import "./movie-sort.scss"

export function MovieSort({ sort, onChange }) {
    return (
        <div className="movie-sort">
            <label
                htmlFor="movie-sort"
                className="movie-sort__label"
            >Sort by:</label>
            <select
                id="movie-sort"
                className="movie-sort__select"
                value={sort}
                onChange={(event) => onChange(event.target.value)}
            >
            <option value="popularity.desc">Popular</option>
            <option value="vote_average.desc">Rating: high → low</option>
            <option value="vote_average.asc">Rating: low → high</option>
            <option value="primary_release_date.desc">Release date: newest</option>
            <option value="primary_release_date.asc">Release date: oldest</option>
            </select>
        </div>
    );
}