import ProductList from './ProductList';
import { useState } from 'react';
import Cart from './Cart';

function Main(props) {
  const [options, setOptions] = useState({ products: ['eggs'], state: 'NC' });

  return (
    <main className="row">
      <div className="col-sm-6 col-md-8 col-lg-10">
        {options.state}
        <ProductList setOptions={setOptions} products={options.products} />
      </div>
      <div className="col-sm-6 col-md-4 col-lg-2">
        <Cart />
      </div>
      <button onClick={() => setOptions({ products: ['toast'] })}>
        make toast
      </button>
    </main>
  );
}

export default Main;
