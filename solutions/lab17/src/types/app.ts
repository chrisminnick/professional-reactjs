import { Book } from './book';
export interface AppProps {
  itemsInCart: Book[];
  products: Book[];
  addToCart: (book: Book) => void;
  loadProducts: (products: Book[]) => void;
  removeFromCart: (idToRemove: string) => void;
  submitCart: (data: Book[]) => void;
}
