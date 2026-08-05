import { Outlet } from "react-router-dom";
import { Sidebar } from "../../widgets/sidebar/sidebar";
import { SearchBar } from "../../features/search-movies/ui/search-bar";
import { SearchProvider } from "../../features/search-movies/model/search-context";
import "./layout.scss";

export function MainLayout() {
  return (
  <SearchProvider>
    <div className="layout">
      <Sidebar />
        <div className="layout__main">
          <div className="layout__search">
                <SearchBar />
          </div>

          <main className="layout__content">
            <Outlet />
          </main>
        </div>
    </div>
  </SearchProvider>
  );
}