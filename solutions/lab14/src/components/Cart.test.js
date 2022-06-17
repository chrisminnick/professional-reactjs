import { render, screen } from '@testing-library/react';
import Cart from './Cart';
import '@testing-library/jest-dom';

it('renders the cart', () => {
  render(<Cart cartItems={[]} removeFromCart={jest.fn} />);
  expect(screen.getByText(/Cart/)).toBeInTheDocument();
});

it('renders cart items', () => {
  render(
    <Cart
      cartItems={[{ title: 'testing is fun', price: '10000' }]}
      removeFromCart={jest.fn}
    />
  );
  expect(screen.getByText(/testing is fun/)).toBeInTheDocument();
});

it('calculates total correctly', () => {
  render(
    <Cart
      cartItems={[
        { title: 'testing is fun', price: '10000' },
        { title: 'good book', price: '2' },
      ]}
      removeFromCart={jest.fn}
    />
  );
  expect(screen.getByText(/10002/)).toBeInTheDocument();
});
