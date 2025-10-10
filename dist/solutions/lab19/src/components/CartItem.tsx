import { CartItemProps } from '../types/cart';
function CartItem(props: CartItemProps) {
  return (
    <p>
      {props.title}:${props.price}
    </p>
  );
}

export default CartItem;
