import { useState, useEffect } from 'react';
interface Book {
  id: string;
  title: string;
  author: string;
  published?: string;
  country?: string;
  lang?: string;
  pages?: string;
  image?: string;
  url?: string;
  price?: string;
}

function useFetch(url: string) {
  const [products, setProducts] = useState<Array<Book>>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setIsLoading(false);
        setProducts(json);
        localStorage.setItem('products', JSON.stringify(json));
      } catch (error) {
        console.log(`error: ${error}`);
        if (localStorage.getItem('products')) {
          /*        let stringProduct = localStorage.getItem('products');
          stringProduct = JSON.parse(stringProduct)
          setProducts(stringProduct); */
        } else {
          console.log('no default data');
        }
      }
    }
    fetchData();
  }, [url]);

  return { products, isLoading };
}

export default useFetch;
