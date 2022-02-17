import { render, screen } from '@testing-library/react';
import Main from './Main';

test('renders', () => {
  render(<Main />);
  const mainElement = screen.getByTestId(/main/i);
  expect(mainElement).toBeInTheDocument();
});
