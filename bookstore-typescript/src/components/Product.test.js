import { render, screen, fireEvent } from '@testing-library/react';
import Product from './Product';

test('renders products', () => {
  render(<Product />);
  const producttest = screen.getByTestId(/product/i);
  expect(producttest).toBeInTheDocument();
});

test('calls function on click', () => {
  const addToCart = jest.fn();
  render(<Product addToCart={addToCart} />);
  const button = screen.getByRole('button');
  fireEvent.click(button);
  expect(addToCart).toHaveBeenCalled();
});
