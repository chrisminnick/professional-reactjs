import { render, screen } from '@testing-library/react';
import Product from './Product';

it('renders testing text', () => {
  render(
    <Product
      title="React is Awesome"
      author="Chris"
      addToCart={jest.fn}
      removeFromCart={jest.fn}
    />
  );
  expect(screen.getByText(/React is Awesome/)).toBeInTheDocument();
});
