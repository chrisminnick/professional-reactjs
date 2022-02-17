import { render, screen } from '@testing-library/react';
import ProductList from './ProductList';
import productsData from '../data/products';

beforeEach(() => {
  render(
    <ProductList
      products={productsData}
      addToCart={jest.fn()}
      removeFromCart={jest.fn()}
    />
  );
});

test('renders correctly', () => {
  const productlisttest = screen.getByTestId(/productlist/i);
  expect(productlisttest).toBeInTheDocument();
});

test('renders if products not passed in', () => {
  const productlisttest = screen.getByTestId(/productlist/i);
  expect(productlisttest).toBeInTheDocument();
});
