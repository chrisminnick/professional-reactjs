import { render, screen } from '@testing-library/react';
import App from './App';

test('renders testing text', () => {
  render(<App />);
  const testText = screen.getByText(/Welcome to React Bookstore/i);
  expect(testText).toBeInTheDocument();
});
