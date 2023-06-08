import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Home from './pages/Home/Home';
import Layout from './Layout/Layout';
const MovieDetails = lazy(() => import('./pages/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('./pages/Movies/Movies'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
