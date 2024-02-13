import { Link } from 'react-router-dom';
import CartLink from './CartLink';
import Book from './Book';
interface HeaderProps {
  itemsInCart: Book[];
}
function Header(props: HeaderProps) {
  return (
    <header className="container">
      <div className="row p-4">
        <div className="col-md-9">
          <h1>Welcome to React Bookstore!!!</h1>
          <Link to="/">Home</Link>
        </div>
        <div className="col-md-3">
          <CartLink itemsInCart={props.itemsInCart} />
        </div>
      </div>
    </header>
  );
}

export default Header;
