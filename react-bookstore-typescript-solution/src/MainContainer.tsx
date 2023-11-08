import ProductList from './ProductList';
import Cart from './Cart';
import { Book } from './types';

function MainContainer(props: { products: Book[]; itemsInCart: string[] }) {
  function getProduct(products: Book[], item: string): any {
    return products.find((product) => item === product.id);
  }
  let cartItems = props.itemsInCart.map((id) => getProduct(props.products, id));

  return (
    <div className="row">
      <div className="col-md-8">
        <ProductList
          products={props.products}
          itemsInCart={props.itemsInCart}
        />
      </div>
      <div className="col-md-4">
        <Cart cartItems={cartItems} />
      </div>
    </div>
  );
}

export default MainContainer;
