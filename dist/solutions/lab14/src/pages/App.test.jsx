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

// Mock the hooks
vi.mock('../hooks/useProducts.tsx', () => ({
  default: vi.fn(),
}));

vi.mock('../hooks/useCart.tsx', () => ({
  default: vi.fn(),
}));

vi.mock('../hooks/useTheme', () => ({
  useTheme: vi.fn(),
}));

const mockResponse = [
  {
    id: '1',
    title: 'Buy This Book Now!',
    author: 'Chris Minnick',
    published: '2023',
    country: 'USA',
    lang: 'English',
    pages: '1000',
    image: 'default.jpg',
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
  beforeEach(async () => {
    const useProducts = vi.mocked(
      (await import('../hooks/useProducts.tsx')).default
    );
    const useCart = vi.mocked((await import('../hooks/useCart.tsx')).default);
    const { useTheme } = vi.mocked(await import('../hooks/useTheme'));

    // Default mock implementations
    useProducts.mockReturnValue([[], false]);
    useCart.mockReturnValue([[], vi.fn(), vi.fn()]);
    useTheme.mockReturnValue({ theme: 'light', toggleTheme: vi.fn() });
  });

  it('renders loading state when isLoading is true', async () => {
    const useProducts = vi.mocked(
      (await import('../hooks/useProducts.tsx')).default
    );

    useProducts.mockReturnValue([[], true]); // isLoading = true

    render(<App />);
    expect(screen.getByText('Loading....')).toBeInTheDocument();
  });

  it('renders main app components when isLoading is false', async () => {
    const useProducts = vi.mocked(
      (await import('../hooks/useProducts.tsx')).default
    );
    const mockProducts = [mockResponse[0]];

    useProducts.mockReturnValue([mockProducts, false]); // isLoading = false

    render(<App />);

    // Check that the main structure is rendered
    expect(screen.getByText('Buy This Book Now!')).toBeInTheDocument();
    expect(screen.getByText('Cart')).toBeInTheDocument();
  });

  it('applies correct theme class to container', async () => {
    const { useTheme } = vi.mocked(await import('../hooks/useTheme'));

    useTheme.mockReturnValue({ theme: 'dark', toggleTheme: vi.fn() });

    const { container } = render(<App />);

    expect(container.firstChild).toHaveClass('container-fluid', 'dark');
  });

  it('renders with light theme', async () => {
    const { useTheme } = vi.mocked(await import('../hooks/useTheme'));

    useTheme.mockReturnValue({ theme: 'light', toggleTheme: vi.fn() });

    const { container } = render(<App />);

    expect(container.firstChild).toHaveClass('container-fluid', 'light');
  });

  it('passes products to ProductList component', async () => {
    const useProducts = vi.mocked(
      (await import('../hooks/useProducts.tsx')).default
    );
    const mockProducts = [
      mockResponse[0],
      { ...mockResponse[0], id: '2', title: 'Second Book' },
    ];

    useProducts.mockReturnValue([mockProducts, false]);

    render(<App />);

    // Check that both products are rendered
    expect(screen.getByText('Buy This Book Now!')).toBeInTheDocument();
    expect(screen.getByText('Second Book')).toBeInTheDocument();
  });

  it('handles empty products array', async () => {
    const useProducts = vi.mocked(
      (await import('../hooks/useProducts.tsx')).default
    );

    useProducts.mockReturnValue([[], false]); // empty products

    render(<App />);

    // Should still render the main structure but no products
    expect(screen.getByText('Cart')).toBeInTheDocument();
    expect(screen.queryByText('Buy This Book Now!')).not.toBeInTheDocument();
  });

  it('displays cart with items', async () => {
    const useCart = vi.mocked((await import('../hooks/useCart.tsx')).default);

    const mockCart = [{ id: '1', title: 'Book in Cart', price: '15' }];
    useCart.mockReturnValue([mockCart, vi.fn(), vi.fn()]);

    render(<App />);

    // Check that cart displays the book and total
    expect(screen.getByText('Cart')).toBeInTheDocument();
    expect(screen.getByText(/Book in Cart/)).toBeInTheDocument();
    expect(screen.getByText(/Total: \$15/)).toBeInTheDocument();
  });
});
