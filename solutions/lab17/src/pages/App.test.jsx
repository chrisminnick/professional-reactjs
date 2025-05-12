import { describe, expect, it, beforeEach, afterEach, vi } from 'vitest';
import {
  render,
  screen,
  waitFor,
  fireEvent,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import App from './App';
import { ThemeProvider } from '../contexts/ThemeContext';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore([]);

const mockResponse = [
  {
    id: '1',
    title: 'Buy This Book Now!',
    author: 'Chris Minnick',
    published: '2023',
    country: 'USA',
    lang: 'English',
    pages: '1000',
    image: 'defult.jpg',
    url: '',
    price: '5',
  },
];
const store = mockStore({
  cart: { items: [] },
  products: { products: mockResponse },
});
beforeEach(() => {
  vi.spyOn(window, 'fetch').mockResolvedValue({
    json: vi.fn().mockResolvedValue(mockResponse),
  });
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('App Component', () => {
  it('Renders', () => {
    render(
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    );
    let element = screen.getByText(/Loading/i);
    expect(element).toBeInTheDocument();
  });

  // snapshot test
  it('renders as expected', async () => {
    const { container } = render(
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    );
    await waitForElementToBeRemoved(screen.getByText('Loading....'));
    expect(container).toMatchSnapshot();
  });

  it('returns data from the api', async () => {
    render(
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    );
    await waitFor(() => {
      expect(screen.getByText(/buy this book now/i)).toBeInTheDocument();
    });
    screen.debug();
  });
  it('displays an error message when api errors', async () => {
    vi.spyOn(window, 'fetch').mockImplementation(() => {
      throw new Error('bad network');
    });
    render(
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    );
    await waitFor(() => {
      expect(screen.getByText(/error/i)).toBeInTheDocument();
    });
  });

  it('clicking the button toggles button messages', () => {
    render(
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    );
    let buttonText;
    setTimeout(() => {
      const buttons = screen.getAllByText(/Add to Cart/i);
      fireEvent.click(buttons[0]);
      buttonText = screen.getAllByText(/Remove from Cart/i);
      expect(buttonText[0]).toBeInTheDocument();
    }, 2000);
  });
});
