import { render, screen } from '@testing-library/react';
import App from './App';

test('renders testing text', () => {
  render(<App />);
  const testText = screen.getByText(/This is just for testing./i);
  expect(testText).toBeInTheDocument();
});
