import CartItem from './CartItem';
import styles from './CartItem.module.css';

function Cart(props){
    return(
        <div className={styles.cart}>
            <h2>Cart</h2>
            <CartItem />
            <CartItem />
            <CartItem />
            Total: $x USD
        </div>
    );
}

export default Cart;
