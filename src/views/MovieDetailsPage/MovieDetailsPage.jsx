
import { useParams, Route, Switch, useRouteMatch, useLocation} from 'react-router-dom/cjs/react-router-dom.min';
import { NavLink } from 'react-router-dom';
import { useState, useEffect, lazy, Suspense } from 'react';
  
import { getFilmById } from '../../services/API';
  
import MovieCard from '../../components/MoviesList/MovieCard/MovieCard';
import s from './MovieDetailsPage.module.css'
import Button from '../../components/Button/Button';
  
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

    const { url } = useRouteMatch();
    const location = useLocation();
  
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

    return (
      <div>
        <Button/>
        <MovieCard movie={movieDetails} />
          <h2 className={s.title}>Additional information</h2>
          <ul className={s.info_list}>
            <li>
              <NavLink
                to={{
                  pathname: url + '/cast',
                  state: { ...location.state, id: movieId },
                }}
                className={s.link}
                activeClassName={s.activeLink}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{
                pathname: url + '/reviews',
                state: { ...location.state, id: movieId },
                }}
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