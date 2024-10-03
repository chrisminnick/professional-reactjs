import { describe, expect, it, beforeEach, afterEach, vi } from 'vitest';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
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
  vi.spyOn(window, 'fetch').mockResolvedValue({
    json: vi.fn().mockResolvedValue(mockResponse),
  });
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('App Component', () => {
  it('Renders', () => {
    render(<App />);
    let element = screen.getByText(/Loading/i);
    expect(element).toBeInTheDocument();
  });
  it('renders as expected', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
  it('returns data from the api', async () => {
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText(/buy this book now/i)).toBeInTheDocument();
    });
    screen.debug();
  });
  it('clicking the button toggles button messages', () => {
    render(<App />);
    let buttonText;

    setTimeout(() => {
      const buttons = screen.getAllByText(/Add to Cart/i);
      fireEvent.click(buttons[0]);
      buttonText = screen.getByText(/Remove from Cart/i);
      expect(buttonText).toBeInTheDocument();
    }, 2000);
  });
});
