import ProductList from './ProductList';
import Cart from './Cart';

function Main({ products = [], itemsInCart = [], addToCart = ()=>void, removeFromCart }) {
  function getProduct(products: any[], item: never) {
    return products.find((product) => item === product.id);
  }
  let cartItems = itemsInCart.map((id) => getProduct(products, id));

  return (
    <main className="row" data-testid="main">
      <div className="col-md-8">
        <ProductList
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          products={products}
          itemsInCart={itemsInCart}
        />
      </div>
      <div className="col-md-4">
        <Cart cartItems={cartItems} />
      </div>
    </main>
  );
}


export default Main;
