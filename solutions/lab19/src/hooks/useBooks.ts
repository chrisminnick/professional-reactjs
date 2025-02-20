import { useState, useEffect } from 'react';
import { Book } from '../types/book';
import { readCartFromLocalStorage } from '../actions/index';
import { useDispatch } from 'react-redux';
function useBooks(): [Book[] | [], boolean, boolean] {
  const dispatch = useDispatch();
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fetchError, setFetchError] = useState<boolean>(false);

  function shuffleArray(array: Book[]): Book[] {
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
        const response = await fetch(
          'http://localhost:5173/data/products.json'
        );
        const json = await response.json();
        const shuffledArray = shuffleArray(json);
        setBooks(shuffledArray);
        setIsLoading(false);
        dispatch(readCartFromLocalStorage());
        setFetchError(false);
      } catch (e) {
        console.error(e);
        setFetchError(true);
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return [books, isLoading, fetchError];
}

export default useBooks;
