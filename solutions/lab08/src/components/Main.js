import ProductList from './ProductList';
import Cart from './Cart';

function Main(props) {
  function getProduct(products, item) {
    return products.find((product) => item === product.id);
  }
  let cartItems = props.itemsInCart.map((id) => getProduct(props.products, id));

  return (
    <main className="row">
      <div className="col-md-8">
        <ProductList
          products={props.products}
          itemsInCart={props.itemsInCart}
          setItemsInCart={props.setItemsInCart}
        />
      </div>
      <div className="col-md-4">
        <Cart cartItems={cartItems} />
      </div>
    </main>
  );
}

export default Main;
