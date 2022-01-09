import { useState, useEffect, Suspense } from 'react';
import { getTrendingFilms } from '../services/API';

import MoviesList from '../components/MoviesList/MoviesList';

export default function HomeView() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const asyncFetch = async () => {
        const movies = await getTrendingFilms();
        setMovies(movies);
      };
      asyncFetch()
}, []);

  return (
      <>
      <h2>Trending today</h2>
      <Suspense fallback={<h2>Loading movies list</h2>}>
        <MoviesList movies={movies}/>
      </Suspense>
      </>
  );
}
