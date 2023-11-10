import { Routes, Route } from 'react-router-dom';

import ProductList from './ProductList';
import Cart from './Cart';
import { Book } from '../types';

function MainContainer(props: {
  products: Book[];
  itemsInCart: string[];
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
}) {
  function getProduct(products: Book[], item: string): any {
    return products.find((product) => item === product.id);
  }
  let cartItems = props.itemsInCart.map((id) => getProduct(props.products, id));

  return (
    <div className="row">
      <Routes>
        <Route
          path="/"
          element={
            <ProductList
              products={props.products}
              itemsInCart={props.itemsInCart}
              addToCart={props.addToCart}
              removeFromCart={props.removeFromCart}
            />
          }
        />
        <Route
          path="/cart/"
          element={
            <Cart cartItems={cartItems} removeFromCart={props.removeFromCart} />
          }
        />
        <Route
          path="/cart/:id"
          element={
            <Cart cartItems={cartItems} removeFromCart={props.removeFromCart} />
          }
        />
      </Routes>
    </div>
  );
}

export default MainContainer;
