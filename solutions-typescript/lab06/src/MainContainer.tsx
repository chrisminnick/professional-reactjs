import ProductList from './ProductList';
import Cart from './Cart';

function Main() {
  return (
    <main className="row">
      <div className="col-md-8">
        <ProductList />
      </div>
      <div className="col-md-4">
        <Cart />
      </div>
    </main>
  );
}

export default Main;
