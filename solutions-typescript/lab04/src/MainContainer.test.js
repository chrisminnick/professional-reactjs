import { render, screen } from '@testing-library/react';
import Main from './Main';

test('renders testing text', () => {
  render(<Main />);
  const main = screen.getByTestId('main-component');
  screen.debug();
  expect(main).toBeInTheDocument();
});
