import { render, screen } from '@testing-library/react';
import Main from './Main';

test('renders testing text', () => {
  render(<Main />);
  const testText = screen.getByText(/best books in the world./i);
  expect(testText).toBeInTheDocument();
});
