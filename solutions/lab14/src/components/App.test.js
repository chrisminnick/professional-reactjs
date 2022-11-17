import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('makes the api call', () => {
    jest.mock('../api/products');
    render(<App />);
    expect(screen.getByText('Loading')).toBeInTheDocument();
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

  test('clicking the button toggles button messages', () => {
    render(<App />);
    let buttonText;

    setTimeout(() => {
      const buttons = screen.getAllByText(/Add to Cart/i);
      fireEvent.click(buttons[0]);
      buttonText = buttons[0].getByText(/In Cart/i);
      expect(buttonText).toBeInDocument();

      fireEvent.click(buttons[0]);
      buttonText = buttons[0].getByText(/Add to Cart/i);
      expect(buttonText).toBeInDocument();
    }, 2000);
  });
});
