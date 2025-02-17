import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import Product from './Product.js';

describe('Product Component', () => {
  const book = {
    id: '1',
    title: 'Title',
    price: '10',
    author: 'Author',
    published: 'Published Date',
    country: 'Country',
    lang: 'Language',
    pages: '100',
    image: 'Image URL',
    url: 'Link URL',
    inCart: false,
    addToCart: vi.fn(),
    removeFromCart: vi.fn(),
  };
  it('Renders', () => {
    render(<Product {...book} />);
    let element = screen.getByText(/title/i);
    expect(element).toBeInTheDocument();
  });
});
