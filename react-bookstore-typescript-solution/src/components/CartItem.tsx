function CartItem(props: { title: string; price: number }) {
  return (
    <div>
      {props.title} - {props.price}
    </div>
  );
}

export default CartItem;
