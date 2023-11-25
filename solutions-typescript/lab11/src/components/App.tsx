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
        const response = await fetch('//localhost:5174/data/products.json');
        const products = await response.json();
        localStorage.setItem('products', JSON.stringify(products));

        shuffleArray(products);
        setProducts(products);
      } catch (error) {
        localStorage.getItem('products') &&
          setProducts(JSON.parse(localStorage.getItem('products')!));
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
    localStorage.setItem('cart', JSON.stringify(itemsInCart));
  }

  function removeFromCart(id: string) {
    const newItemsInCart = itemsInCart.filter((item) => item !== id);
    setItemsInCart(newItemsInCart);
    localStorage.setItem('cart', JSON.stringify(newItemsInCart));
  }

  return (
    <div className="container">
      <Header />
      {loading && <h1>Loading...</h1>}
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
