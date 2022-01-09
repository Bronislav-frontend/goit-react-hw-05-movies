import { useState, useEffect } from 'react';
import { getCastInfo } from '../../services/API';

import s from './Cast.module.css'

import noPoster from '../../images/noPoster.jpg';

export default function Cast({ movieId }) {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getCastInfo(movieId).then(setCast);
  }, [movieId]);

  return (
    <ul className={s.cast_list}>
      {cast.map(({ id, profile_path, name, character }) => {

        return (
          <li 
          className={s.cast_item}
          key={id}>
            <img
              className={s.cast_img}
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