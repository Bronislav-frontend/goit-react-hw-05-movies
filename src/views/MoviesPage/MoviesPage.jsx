import { useState, useEffect, Suspense } from 'react';
import { useHistory, useLocation } from 'react-router';
import { toast } from 'react-toastify';

import { getFilmsByQuery } from '../../services/API';

import SearchForm from '../../components/SearchForm/SearchForm';
import MoviesList from '../../components/MoviesList/MoviesList';

import s from './MoviesPage.module.css'


export default function MovieView() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const history = useHistory();
  const location = useLocation();

  const serchQuery = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    if (serchQuery) {
      setQuery(serchQuery);
      }
      asyncFetchByQuery()
  }, [serchQuery]);

  const onChange = e => {
    setQuery(e.target.value);
  };

  const asyncFetchByQuery = async () => {
    const moviesBySearch = await getFilmsByQuery(query)
    setMovies(moviesBySearch)
  }

  const onSubmit = e => {
    if (query.trim() === ('')) {
      toast.warning('Enter what you want to search')
    }
    e.preventDefault();
    setQuery('')
    asyncFetchByQuery()
    history.push({ ...history.location, search: `?query=${query}` });
  };    

  return (
    <div className={s.container}>
      <h2 className={s.title}>Movies search</h2> 
      <SearchForm query={query} onChange={onChange} onSubmit={onSubmit} />

      <Suspense fallback={<h2>Loading movies list</h2>}>
        {movies && (
           <MoviesList movies={movies}/>
        )}
      </Suspense>
    </div>
  );
}