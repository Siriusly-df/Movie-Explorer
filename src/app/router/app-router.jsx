import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "../layouts/main-layout";
import { HomePage } from "../../pages/home/home-page";
import { FavoritesPage } from "../../pages/favorites/favorite-page";
import { MoviePage } from "../../pages/movie/movie-page";
import { NotFoundPage } from "../../pages/not-found/not-found-page";
import { PersonPage } from "../../pages/person/person-page";
import { SearchPage } from "../../pages/search/search-page";
import { UpcomingPage } from "../../pages/upcoming/upcoming-page";
import { DiscoverPage } from "../../pages/discover-page/discover-page";


export function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="favorites" element={<FavoritesPage />} />
                    <Route path="movie/:id" element={<MoviePage />} />
                    <Route path="*" element={<NotFoundPage />} />
                    <Route path="/actor/:id" element={<PersonPage />} />
                    <Route path="/upcoming" element={<UpcomingPage />}/>
                    <Route path="/discover" element={<DiscoverPage />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}