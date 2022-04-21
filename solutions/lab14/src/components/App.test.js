import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('renders testing text', () => {
    render(<App />);
    const testText = screen.getByText(/Welcome to React Bookstore/i);
    expect(testText).toBeInTheDocument();
  });
  it('renders testing text', () => {
    render(<App />);
    const testText = screen.getByText(/Welcome to React Bookstore/i);
    expect(testText).toBeInTheDocument();
  });
  it('renders as expected', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
