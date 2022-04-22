import CartLink from './CartLink';
import { Link } from 'react-router-dom';
import React from 'react';

const Header = React.memo((props) => {
  return (
    <header className="container">
      <div className="row p-4">
        <div className="col-md-9">
          <h1>Welcome to React Bookstore!!!</h1>
          <Link to="/">Home</Link>
        </div>
        <div className="col-md-3">
          <Link to="/cart/">Shopping Cart</Link>
          <CartLink itemsInCart={props.itemsInCart} />
        </div>
      </div>
    </header>
  );
});

export default Header;
