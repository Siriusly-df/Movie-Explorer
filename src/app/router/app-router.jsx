import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "../layouts/main-layout";
import { HomePage } from "../../pages/home/home-page";
import { FavoritesPage } from "../../pages/favorites/favorite-page";
import { MoviePage } from "../../pages/movie/movie-page";
import { NotFoundPage } from "../../pages/not-found/not-found-page";


export function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="favorites" element={<FavoritesPage />} />
                    <Route path="movie/:id" element={<MoviePage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}