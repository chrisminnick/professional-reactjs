import ProductList from './ProductList';
import Cart from './Cart';

function Main() {
  return (
    <div data-testid="main-component">
      <ProductList />
      <Cart />
    </div>
  );
}

export default Main;
