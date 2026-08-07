import { useSearch } from "../model/search-context";
import { Button } from "../../../shared/ui/button";
import { useNavigate } from "react-router-dom"; 
import "./search-bar.scss";

export function SearchBar() {
  const { search, setSearch } = useSearch();
  const searchValue = search.trim();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchValue.length === 0) {
      return;
    } 
    navigate(`/search?query=${encodeURIComponent(searchValue)}`)
  }

   return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input 
        className="search-bar__input" 
        type="text" 
        placeholder="Search movies..." 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button 
        type="submit"
        className="search-bar__button"
        aria-label="Search" 
      ></Button>
    </form>
   )
}

