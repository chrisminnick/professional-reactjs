import styles from './CartItem.module.css';

function CartItem(props){
    return(
        <div className={styles.cartItem}>
            {props.title} - {props.price}
        </div>
    );
};

export default CartItem;