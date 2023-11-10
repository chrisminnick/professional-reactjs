import { render } from '@testing-library/react';
import App from '../components/App';

test('demo', () => {
  expect(true).toBe(true);
});

test('Renders the main page', () => {
  render(<App />);
  expect(true).toBeTruthy();
});

test('renders as expected', () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});
