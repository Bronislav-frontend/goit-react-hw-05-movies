import { useState, useEffect } from 'react';
import { getCastInfo } from '../../services/API';

import noPoster from '../../images/noPoster.jpg';

export default function Cast({ movieId }) {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getCastInfo(movieId).then(setCast);
  }, [movieId]);

  return (
    <ul>
      {cast.map(({ id, profile_path, name, character }) => {

        return (
          <li key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : noPoster
              }
              alt={name}
            />

            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
}