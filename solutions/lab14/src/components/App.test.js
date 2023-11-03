import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          id: '1',
          title: 'Things Fall Apart',
          author: 'Chinua Achebe',
          published: '1958',
          country: 'Nigeria',
          lang: 'English',
          pages: '209',
          image: 'things-fall-apart.jpg',
          url: 'https://en.wikipedia.org/wiki/Things_Fall_Apart',
          price: '5',
        },
      ]),
  })
);

describe('<App />', () => {
  test('makes the api call', async () => {
    render(<App />);
    await waitFor(
      () => expect(screen.getByText('Chinua Achebe')).toBeInTheDocument(),
      {
        timeout: 2000,
      }
    );
  });

  test('renders testing text', () => {
    render(<App />);
    const testText = screen.getByText(/Welcome to React Bookstore/i);
    expect(testText).toBeInTheDocument();
  });

  test('renders as expected', () => {
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
