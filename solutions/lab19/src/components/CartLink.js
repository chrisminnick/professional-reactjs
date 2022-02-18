import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function CartLink(props) {
  return (
    <>
      <Link to="/cart">
        <div style={{ position: 'relative' }}>
          <FontAwesomeIcon icon={faShoppingCart} size="4x" />
          <span
            style={{ position: 'absolute', top: 12, left: 40, color: '#fff' }}
          >
            {props.itemsInCart.length}
          </span>
        </div>
      </Link>
    </>
  );
}

export default CartLink;
