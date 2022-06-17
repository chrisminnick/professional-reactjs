import { render, screen } from '@testing-library/react';
import CartItem from './CartItem';
import '@testing-library/jest-dom';

it('renders a cart item', () => {
  render(<CartItem title="test book" price="6" />);
  expect(screen.getByText(/test book - 6/)).toBeInTheDocument();
});
