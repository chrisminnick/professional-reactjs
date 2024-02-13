import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Book from './Book';

interface CartLinkProps {
  itemsInCart: Book[];
}
function CartLink(props: CartLinkProps) {
  return (
    <>
      <Link to="/cart" style={{ textDecoration: 'none' }}>
        <div style={{ position: 'relative' }}>
          <FontAwesomeIcon icon={faShoppingCart} size="4x" />
          <span
            style={{
              position: 'relative',
              top: -30,
              right: 40,
              color: '#fff',
              fontSize: 20,
            }}
          >
            {props.itemsInCart.length}
          </span>
        </div>
      </Link>
    </>
  );
}

export default CartLink;
