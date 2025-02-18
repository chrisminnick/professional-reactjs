import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import Product from './Product.js';

describe('Product Component', () => {
  const addToCart = vi.fn();
  const removeFromCart = vi.fn();

  const book = {
    id: '1',
    title: 'Title',
    price: '10',
    author: 'Author',
    published: 'Published Date',
    country: 'Country',
    lang: 'Language',
    pages: '100',
    image: 'image.jpg',
    url: 'Link URL',
    inCart: false,
    avgRating: '5',
    addToCart: addToCart,
    removeFromCart: removeFromCart,
  };
  it('Renders', () => {
    render(<Product {...book} />);
    let element = screen.getByText(/title/i);
    expect(element).toBeInTheDocument();
  });
});
