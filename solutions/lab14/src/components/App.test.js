import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from '@testing-library/react';
import App from './App';

const mockResponse = [
  {
    id: '1',
    title: 'Buy This Book Now',
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

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockResponse),
  });
});

afterEach(() => {
  jest.restoreAllMocks();
});

it('displays loading message before api request returns', () => {
  render(<App />);
  expect(screen.getByText('Loading')).toBeInTheDocument();
  screen.debug();
});

it('returns data from the api', async () => {
  render(<App />);
  await waitFor(() => {
    expect(screen.getByText(/buy this book now/i)).toBeInTheDocument();
  });
  screen.debug();
});

describe('<App />', () => {
  test('renders', () => {
    render(<App />);
    const container = screen.getByTestId('app');
    expect(container).toBeInTheDocument();
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
      act(() => {
        fireEvent.click(buttons[0]);
      });
      buttonText = buttons[0].getByText(/In Cart/i);
      expect(buttonText).toBeInDocument();

      act(() => {
        fireEvent.click(buttons[0]);
      });
      buttonText = buttons[0].getByText(/Add to Cart/i);
      expect(buttonText).toBeInDocument();
    }, 2000);
  });
});
