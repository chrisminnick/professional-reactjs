import ProductList from './ProductList';
import Cart from './Cart';
import { Book } from '../types';

interface Props {
  products: Book[];
  itemsInCart: string[];
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
}

function Main(props: Props) {
  function getProduct(products: Book[], item: string) {
    return products.find((product: Book) => item === product.id);
  }
  let cartItems: (Book | undefined)[] = props.itemsInCart.map((id) =>
    getProduct(props.products, id)
  );

  return (
    <main className="row">
      <div className="col-md-8">
        <ProductList
          products={props.products}
          itemsInCart={props.itemsInCart}
          addToCart={props.addToCart}
          removeFromCart={props.removeFromCart}
        />
      </div>
      <div className="col-md-4">
        <Cart cartItems={cartItems} removeFromCart={props.removeFromCart} />
      </div>
    </main>
  );
}

export default Main;
