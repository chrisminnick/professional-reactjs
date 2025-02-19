import { Book } from './book';
export interface CartItemProps {
  id: string;
  title: string;
  price: string;
}

export interface CartProps {
  itemsInCart: Book[];
  removeFromCart: (idToRemove: string) => void;
  submitCart: (data: Book[]) => void;
}
