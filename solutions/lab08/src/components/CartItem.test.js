import { render, screen } from '@testing-library/react';
import CartItem from './CartItem';

test('renders', () => {
  render(<CartItem />);
  const cartItemElement = screen.getByTestId(/cartitem/i);
  expect(cartItemElement).toBeInTheDocument();
});
