import { describe, expect, it, beforeEach, afterEach, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import App from './App';
import { ThemeProvider } from '../contexts/ThemeContext';

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

beforeEach(() => {
  vi.spyOn(window, 'fetch').mockResolvedValue({
    json: vi.fn().mockResolvedValue(mockResponse),
  });
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('App Component', () => {
  it('returns data from the api', async () => {
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    );
    await waitFor(() => {
      expect(screen.getByText(/buy this book now/i)).toBeInTheDocument();
    });
    screen.debug();
  });
});
