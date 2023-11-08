import ProductList from './ProductList';
import Cart from './Cart';
import { Book } from './types';

function MainContainer(props: { products: Book[] }) {
  return (
    <div className="row">
      <div className="col-md-8">
        <ProductList products={props.products} />
      </div>
      <div className="col-md-4">
        <Cart />
      </div>
    </div>
  );
}

export default MainContainer;
