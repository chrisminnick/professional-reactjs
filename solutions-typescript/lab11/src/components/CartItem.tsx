function CartItem(props: { title: string; price: string }) {
  return (
    <span>
      {props.title} - {props.price}
    </span>
  );
}

export default CartItem;
