import Footer from './Footer.tsx';
import Header from './Header.tsx';
import MainContainer from './MainContainer.tsx';
import { useState } from 'react';
import { products } from './data/products.ts';

function App() {
  const [itemsInCart, setItemsInCart] = useState(['1', '2', '3']);

  return (
    <div className="container">
      <Header />
      <MainContainer products={products} itemsInCart={itemsInCart} />
      <Footer />
    </div>
  );
}

export default App;
