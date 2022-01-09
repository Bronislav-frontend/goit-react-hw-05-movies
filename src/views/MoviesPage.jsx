import { useState, useEffect, Suspense } from 'react';
import { useHistory, useLocation } from 'react-router';

import { getFilmsByQuery } from '../services/API';

import SearchForm from '../components/SearchForm/SearchForm';
import MoviesList from '../components/MoviesList/MoviesList';


export default function MovieView() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const history = useHistory();
  const location = useLocation();

  const serchQuery = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    if (serchQuery) {
      getFilmsByQuery(serchQuery).then(setMovies);
      setQuery(serchQuery);
    }
  }, [serchQuery]);

  const onChange = e => {
    setQuery(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    const asyncFetchByQuery = async () => {
        const moviesBySearch = await getFilmsByQuery(query)
        setMovies(moviesBySearch)
    }
    asyncFetchByQuery()
    history.push({ ...history.location, search: `?query=${query}` });
  };    

  return (
    <div >
      <h2>Movies search</h2> 
      <SearchForm query={query} onChange={onChange} onSubmit={onSubmit} />

      <Suspense fallback={<h2>Loading movies list</h2>}>
        <MoviesList movies={movies}/>
      </Suspense>
    </div>
  );
}