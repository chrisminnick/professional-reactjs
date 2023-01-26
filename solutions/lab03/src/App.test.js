import { render, screen } from '@testing-library/react';
import App from './App';

test('renders react bookstore', () => {
  render(<App />);
  const linkElement = screen.getByText(/react bookstore/i);
  expect(linkElement).toBeInTheDocument();
});
