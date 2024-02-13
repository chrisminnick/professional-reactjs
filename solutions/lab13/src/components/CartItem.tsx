type cartItemProps = {
  title: string;
  price: string;
};
function CartItem(props: cartItemProps) {
  return (
    <p>
      {props.title}:${props.price}
    </p>
  );
}

export default CartItem;
