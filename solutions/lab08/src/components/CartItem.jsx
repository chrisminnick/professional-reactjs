function CartItem(props) {
  return (
    <p>
      {props.title}:${props.price}
    </p>
  );
}

export default CartItem;
