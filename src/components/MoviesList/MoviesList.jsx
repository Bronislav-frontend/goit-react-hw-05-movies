import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import noPoster from '../../images/noPoster.jpg'
import s from './MoviesList.module.css'

import slugify from 'slugify';

const slug = string =>  slugify(string, { lower: true, remove: /[*+~.()'"!:@]/g });

export default function MoviesList({ movies }) {
  const location = useLocation();

  return (
    
    <ul className={s.movies_gallery}>
      {movies.map(({id, title, poster_path}) => (
        <li
         className={s.movies_item}
         key={id}>
          <Link
           to={{
            pathname: `/movies/${slug(`${title}-${id}`)}`,
            state: { from: location },
           }}
          >
            <img
             className={s.movie_img}
             src={poster_path 
            ? `https://image.tmdb.org/t/p/w500/${poster_path}` : noPoster} 
            alt={{title}} />
            <p className={s.movie_name}>{title}</p> 
          </Link>
        </li>
      ))}
    </ul>
  );
}

