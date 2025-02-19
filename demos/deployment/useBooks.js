import { useState, useEffect, useDebugValue } from 'react';

export function useBooks() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState(null);
  useDebugValue(books, () => 'the useBooks hook');
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const APIURL =
          import.meta.env.MODE === 'production'
            ? import.meta.env.VITE_PROD_API
            : import.meta.env.VITE_DEV_API;
        const response = await fetch(`${APIURL}`);
        const json = await response.json();
        const shuffledArray = shuffleArray(json);
        setBooks(shuffledArray);
        setIsLoading(false);
      } catch (e) {
        setServerError(e);
        console.error(e);
      }
    }
    fetchData();
  }, []);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  return { isLoading, books, serverError };
}
