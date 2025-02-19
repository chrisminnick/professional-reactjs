import { Book } from './book';
export interface ProductListProps {
  itemsInCart: Book[] | [];
  addToCart: (product: Book) => void;
  removeFromCart: (idToRemove: string) => void;
  products: Book[] | [];
}
