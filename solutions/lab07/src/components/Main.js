import ProductList from './ProductList';
import { useState } from 'react';
import Cart from './Cart';

function Main(props) {
  return (
    <main className="row">
      <div className="col-sm-6 col-md-8 col-lg-10">
        <ProductList products={props.products} />
      </div>
      <div className="col-sm-6 col-md-4 col-lg-2">
        <Cart />
      </div>
    </main>
  );
}

export default Main;
