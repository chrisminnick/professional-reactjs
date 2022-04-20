interface Props {
  title: string[];
  price: string[];
  removeFromCart: (idToRemove: string) => void;
}

function CartItem(props: Props) {
  return (
    <div>
      {props.title} - {props.price}
    </div>
  );
}

export default CartItem;
