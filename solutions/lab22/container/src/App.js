import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MicroFrontend from './MicroFrontend';
import Header from './Header';
import { useState } from 'react';

const { REACT_APP_BOOKSTORE_HOST: bookstoreHost } = process.env;
const { REACT_APP_CART_HOST: cartHost } = process.env;
const Bookstore = ({ history }) => (
  <MicroFrontend history={history} host={bookstoreHost} name="Bookstore" />
);
const Cart = ({ history }) => (
  <MicroFrontend history={history} host={cartHost} name="Cart" />
);
function App() {
  const [itemsInCart, setItemsInCart] = useState(['1', '2']);
  const cartItems = [{ title: 'Great Book' }];

  return (
    <>
      <BrowserRouter>
        <Header itemsInCart={itemsInCart} />
        <Routes>
          <Route path="/" element={<Bookstore />} />
          <Route path="cart" element={<Cart cartItems={cartItems} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
