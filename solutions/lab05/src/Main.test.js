import { render, screen } from '@testing-library/react';
import Main from './Main';

test('renders testing text', () => {
  render(<Main />);
  const testText = screen.getByText(/Cart/i);
  expect(testText).toBeInTheDocument();
});
