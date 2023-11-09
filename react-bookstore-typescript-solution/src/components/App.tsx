import Footer from './Footer.tsx';
import Header from './Header.tsx';
import MainContainer from './MainContainer.tsx';
import { useState, useEffect } from 'react';
import { Book } from '../types.ts';

function App() {
  const [itemsInCart, setItemsInCart] = useState<string[]>([]);
  const [products, setProducts] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      try {
        const response = await fetch('//localhost:5173/data/products.json');
        const products = await response.json();
        shuffleArray(products);
        setProducts(products);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    fetchData();
  }, [setProducts]);

  function shuffleArray(array: Book[]) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  function addToCart(id: string) {
    setItemsInCart([...itemsInCart, id]);
  }

  function removeFromCart(id: string) {
    const newItemsInCart = itemsInCart.filter((item) => item !== id);
    setItemsInCart(newItemsInCart);
  }

  return (
    <div className="container">
      <Header />
      {loading && <p>Loading...</p>}
      <MainContainer
        products={products}
        itemsInCart={itemsInCart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
      <Footer />
    </div>
  );
}

export default App;
