import { useState, useEffect } from 'react';
import { getReviewsInfo } from '../../services/API';

import s from './Reviews.module.css'

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviewsInfo(movieId).then(setReviews);
  }, [movieId]);

  return (
    <div>
      {reviews.length !== 0 && (
        <ul className={s.list}>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id} className={s.item}>
                <p className={s.author}>Author: {author}</p>
                <p> {content}</p>
              </li>
            );
          })}
        </ul>
      )} 
      {reviews.length === 0 && (
         <p>There are no reviews for this movie</p>
      )}
    </div>
  );
}