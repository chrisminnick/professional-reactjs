import { useState, useEffect } from 'react';

function useFetch(url) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setIsLoading(false);
        setData(json);
        localStorage.setItem('data', JSON.stringify(json));
      } catch (error) {
        console.log(`error: ${error}`);
        if (localStorage.getItem('data')) {
          setData(JSON.parse(localStorage.getItem('data')));
        } else {
          setData([]);
        }
      }
    }
    fetchData();
  }, [url]);

  return { data, isLoading };
}

export default useFetch;
