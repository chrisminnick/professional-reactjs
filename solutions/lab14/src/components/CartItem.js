import styles from './CartItem.module.css';
import PropTypes from 'prop-types';

function CartItem(props){
    return(
        <div className={styles.cartItem}>
            {props.title} - {props.price}
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