import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders header text', () => {
  render(<Header />);
  const headerElement = screen.getByText(/React Bookstore/i);
  expect(headerElement).toBeInTheDocument();
});
