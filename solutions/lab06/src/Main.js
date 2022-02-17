import ProductList from './ProductList';
import Cart from './Cart';

function Main() {
  return (
    <main className="row">
      <div className="col-md-8 col-lg-10">
        <ProductList />
      </div>
      <div className="col-md-4 col-lg-2">
        <Cart />
      </div>
    </main>
  );
}

export default Main;
