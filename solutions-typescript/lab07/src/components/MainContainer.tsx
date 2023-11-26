import ProductList from './ProductList';
import Cart from './Cart';
import { Book } from '../data/products';

interface MainProps {
  products: Book[];
}
function Main(props: MainProps) {
  return (
    <main className="row">
      <div className="col-md-8">
        <ProductList products={props.products} />
      </div>
      <div className="col-md-4">
        <Cart />
      </div>
    </main>
  );
}

export default Main;
