import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders footer text', () => {
  render(<Footer />);
  const testText = screen.getByText(/This is the footer./i);
  expect(testText).toBeInTheDocument();
});
