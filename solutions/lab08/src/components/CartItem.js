import styles from './CartItem.module.css';

function CartItem({ title = '', price = '' }) {
  return (
    <div className={styles.cartItem} data-testid="cartitem">
      {title} - {price}
    </div>
  );
}

export default CartItem;
