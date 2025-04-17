import { useState, useEffect } from 'react';
import Book from '../types/Book';

function useProducts(): [Book[] | [], boolean] {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function shuffleArray(array: []) {
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
        setProducts(shuffledArray);
        setIsLoading(false);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, []);

  return [products, isLoading];
}

export default useProducts;
