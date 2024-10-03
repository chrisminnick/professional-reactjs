import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import Product from './Product';

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
    image: 'Image URL',
    url: 'Link URL',
    inCart: false,
    addToCart: addToCart,
    removeFromCart: removeFromCart,
  };
  it('Renders', () => {
    render(<Product {...book} />);
    let element = screen.getByText(/title/i);
    expect(element).toBeInTheDocument();
  });
  it('Calls AddtoCart when Clicked', () => {
    render(<Product {...book} />);
    let button = screen.getByText(/Add To Cart/i);
    fireEvent.click(button);

    expect(addToCart).toHaveBeenCalled();
  });
});
