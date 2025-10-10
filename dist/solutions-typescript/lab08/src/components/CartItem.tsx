function CartItem(props: { title: string; price: string }) {
  return (
    <div>
      {props.title} - {props.price}
    </div>
  );
}

export default CartItem;
