import { render, screen } from '@testing-library/react';
import CartItem from './CartItem';
import '@testing-library/jest-dom';

beforeEach(() => {
  render(<CartItem title="test book" price="6" />);
});

it('renders a cart item', () => {
  expect(screen.getByText(/test book - 6/)).toBeInTheDocument();
});
