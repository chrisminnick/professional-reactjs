import { render, screen } from '@testing-library/react';
import CartItem from './CartItem';

test('renders', () => {
  render(<CartItem />);
  const cartElement = screen.getByTestId(/itemInCart/i);
  expect(cartElement).toBeInTheDocument();
});
