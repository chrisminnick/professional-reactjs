import ProductList from './ProductList';
import Cart from './Cart';

interface Book {
  id: string;
  title: string;
  author: string;
  published?: string;
  country?: string;
  lang?: string;
  pages?: string;
  image?: string;
  url?: string;
  price?: string;
}

interface Props {
  products: Book[];
  itemsInCart: string[];
  addToCart: (id: string) => void;
  removeFromCart: (idToRemove: string) => void;
}

function Main(props: Props) {
  function getProduct(products: Book[], item: string) {
    return products.find((product: Book) => item === product.id);
  }
  let cartItems = props.itemsInCart.map((id) => getProduct(props.products, id));

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
        <Cart cartItems={cartItems} />
      </div>
    </main>
  );
}

export default Main;
