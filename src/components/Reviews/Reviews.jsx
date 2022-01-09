import { useState, useEffect } from 'react';
import { getReviewsInfo } from '../../services/API';

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviewsInfo(movieId).then(setReviews);
  }, [movieId]);

  return (
    <div>
      {reviews?.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id} className="item">
                <p className="name">Author: {author}</p>
                <p className="name"> {content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>'We don`t have any reviews for this movie.'</p>
      )}
    </div>
  );
}