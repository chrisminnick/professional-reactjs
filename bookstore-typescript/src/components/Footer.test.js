import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders footer text', () => {
  render(<Footer />);
  const footerElement = screen.getByText(/footer/i);
  expect(footerElement).toBeInTheDocument();
});
