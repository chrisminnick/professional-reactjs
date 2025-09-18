import { useState, useEffect } from 'react';

function useBooks() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState('');

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch('/data/products.json');
        const json = await response.json();
        const shuffledArray = shuffleArray(json);
        setBooks(shuffledArray);
        setIsLoading(false);
      } catch (e) {
        setIsLoading(false);
        setServerError(e);
      }
    }
    fetchData();
  }, []);

  return [books, isLoading, serverError];
}

export default useBooks;
