import { useSearch } from "../model/search-context";
import "./search-bar.scss";

export function SearchBar() {
  const { search, setSearch } = useSearch();
   return (
    <div className="search-bar">
      <input 
        className="search-bar__input" 
        type="text" 
        placeholder="Search movies..." 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />    
    </div>
   )
}