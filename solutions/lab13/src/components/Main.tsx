import ProductList from './ProductList';
import Cart from './Cart';
// import PropTypes from 'prop-types';
// import { productsType } from '../types';
import Book from './types/Book';

interface Props {
  products: Book[] | [];
  itemsInCart: string[];
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
}

function Main(props: Props) {
  let cartItems: Book[] | [] = [];

  props.itemsInCart.map((id) => {
    let value: Book | undefined = props.products.find(
      (product: Book) => id === product.id
    );
    if (value) {
      cartItems = [...cartItems, value];
    }
  });

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
        <Cart
          cartItems={cartItems ? cartItems : []}
          removeFromCart={props.removeFromCart}
        />
      </div>
    </main>
  );
}

// Main.propTypes = {
//   addToCart: PropTypes.func.isRequired,
//   removeFromCart: PropTypes.func.isRequired,
//   inCart: PropTypes.array.isRequired,
//   products: productsType,
// };

// Main.defaultProps = {
//   products: [],
//   inCart: [],
// };

export default Main;
