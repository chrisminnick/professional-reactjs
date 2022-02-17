import { render, screen } from '@testing-library/react';
import App from './App';

test('renders React Bookstore', () => {
  render(<App />);
  const homepageElement = screen.getByText(/React Bookstore/i);
  expect(homepageElement).toBeInTheDocument();
});
