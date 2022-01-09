
import { useParams, useLocation, Route, Switch, useRouteMatch, } from 'react-router-dom/cjs/react-router-dom.min';
import { NavLink } from 'react-router-dom';
import { useState, useEffect, lazy, Suspense } from 'react';
  
import { getFilmById } from '../../services/API';
  
import MovieCard from '../../components/MoviesList/MovieCard/MovieCard';
import s from './MovieDetailsPage.module.css'
  
const Cast = lazy(() =>
    import('../../components/Cast/Cast'),
);
const Reviews = lazy(() =>
    import('../../components/Reviews/Reviews'),
);
  

export default function MovieDetailsView() {
    const [movieDetails, setMovieDetails] = useState(null);
    const { slug } = useParams();
    const movieId = slug.match(/[a-z0-9]+$/gm)[0];
  
    const location = useLocation();
    const { url } = useRouteMatch();
  
    useEffect(() => {
      const asyncFetchById = async () => {
        const movieById = await getFilmById(movieId)
        setMovieDetails(movieById)
      }
       asyncFetchById()
    }, [movieId]);
  
    if (!movieDetails) {
      return <></>; 
    }
    console.log(movieDetails)

    return (
      <div>
        <MovieCard movie={movieDetails} />
          <h2>Additional information</h2>
          <ul>
            <li>
              <NavLink
                to={`${url}/cast`} 
                className={s.link}
                activeClassName={s.activeLink}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${url}/reviews`} 
                className={s.link}
                activeClassName={s.activeLink}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        <Suspense fallback={<h2>Loading movie card</h2>}>
          <Switch>
            <Route exact path={`${url}/cast`}>
              <Cast movieId={movieId} />
            </Route>
  
            <Route exact path={`${url}/reviews`}>
              <Reviews movieId={movieId} />
            </Route>
          </Switch>
        </Suspense>
      </div>
    );
  }