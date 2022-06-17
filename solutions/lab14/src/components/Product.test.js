import { render, screen, fireEvent } from '@testing-library/react';
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

test('clicking the button when not in cart calls addToCart', () => {
  const addToCart = jest.fn();
  const removeFromCart = jest.fn();
  render(
    <Product
      title="React is Awesome"
      author="Chris"
      addToCart={addToCart}
      removeFromCart={removeFromCart}
      inCart={false}
    />
  );
  const button = screen.getByRole('button');

  fireEvent.click(button);
  expect(addToCart).toHaveBeenCalled();
});

test('clicking the button in cart calls removeFromCart', () => {
  const addToCart = jest.fn();
  const removeFromCart = jest.fn();
  render(
    <Product
      title="React is Awesome"
      author="Chris"
      addToCart={addToCart}
      removeFromCart={removeFromCart}
      inCart={true}
    />
  );
  const button = screen.getByRole('button');

  fireEvent.click(button);
  expect(removeFromCart).toHaveBeenCalled();
});
