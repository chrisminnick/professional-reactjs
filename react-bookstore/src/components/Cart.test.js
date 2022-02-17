import { render, screen } from '@testing-library/react';
import Cart from './Cart';

test('renders the Cart', () => {
  render(<Cart />);
  const cartElement = screen.getByTestId(/cart/i);
  expect(cartElement).toBeInTheDocument();
});
