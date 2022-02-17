import { render, screen } from '@testing-library/react';
import ProductList from './ProductList';
import productsData from '../data/products';

test('renders correctly', () => {
  render(<ProductList products={productsData} />);
  const productlisttest = screen.getByTestId(/productlist/i);
  expect(productlisttest).toBeInTheDocument();
});

test('renders if products not passed in', () => {
  render(<ProductList />);
  const productlisttest = screen.getByTestId(/productlist/i);
  expect(productlisttest).toBeInTheDocument();
});
