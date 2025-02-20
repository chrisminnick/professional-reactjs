import { CartItemProps } from '../../types/cart.js';
function CartItem(props: CartItemProps) {
  return (
    <p>
      {props.title}:${props.price}
    </p>
  );
}

export default CartItem;
