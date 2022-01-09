import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import noPoster from '../../images/noPoster.jpg'

import slugify from 'slugify';

const slug = string =>  slugify(string, { lower: true, remove: /[*+~.()'"!:@]/g });

export default function MoviesList({ movies }) {
  const location = useLocation();

  return (
    <ul>
      {movies.map(({id, title, poster_path, name}) => (
        <li key={id}>
          <Link
           to={{
            pathname: `/movies/${slug(`${title}-${id}`)}`,
            state: { from: location },
          }}
          >
            <img src={poster_path 
            ? `https://image.tmdb.org/t/p/w500/${poster_path}` : noPoster} 
            alt={{title}} />
            <p>{title || name}</p> 
          </Link>
        </li>
      ))}
    </ul>
  );
}

