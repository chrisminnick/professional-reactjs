import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders header text', () => {
  render(<Header />);
  const testText = screen.getByText(/Welcome to React Bookstore/i);
  expect(testText).toBeInTheDocument();
});
