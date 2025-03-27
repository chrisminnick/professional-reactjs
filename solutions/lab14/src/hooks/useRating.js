import { useState, useEffect } from 'react';

function useRating() {
  const [rating, setRating] = useState(0);
  const [stars, setStars] = useState('no rating');
  useEffect(() => {
    function calculateRating(rating) {
      switch (rating) {
        case '0':
          return '';
        case '1':
          return '*';
        case '2':
          return '**';
        case '3':
          return '***';
        case '4':
          return '****';
        case '5':
          return '*****';
        default:
          return 'no rating';
      }
    }
    setStars(calculateRating(rating));
  }, [rating]);
  return { rating, stars, setRating };
}

export default useRating;
