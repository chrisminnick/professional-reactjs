import { CartItemProps } from '../../types/cart.tsx';
function CartItem(props: CartItemProps) {
  return (
    <p>
      {props.title}:${props.price}
    </p>
  );
}

export default CartItem;
