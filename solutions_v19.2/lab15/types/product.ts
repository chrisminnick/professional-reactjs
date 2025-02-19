import { Book } from './book';

export type ProductProps = Book & {
  inCart: boolean;
  addToCart: (product: Book) => void;
  removeFromCart: (id: string) => void;
};
