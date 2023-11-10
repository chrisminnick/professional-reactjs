import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <h1>Welcome to React Bookstore.</h1>
      <Link to="/">Home</Link> | <Link to="/cart">Cart</Link>
    </div>
  );
}

export default Header;
