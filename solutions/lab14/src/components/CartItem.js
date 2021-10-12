import styles from './CartItem.module.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function CartItem(props){
    return(
        <div className={styles.cartItem}>
            {props.title} - {props.price}
            <span onClick={()=>{props.removeFromCart(props.id)}}>
                <FontAwesomeIcon icon={faTrash} />
            </span>
        </div>
    );
};

CartItem.propTypes = {
	title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
};

CartItem.defaultProps = {
    title: '',
    price: ''
}

export default CartItem;