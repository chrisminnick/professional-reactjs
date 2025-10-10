import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import Product from './Product.jsx';

describe('Product Component', () => {
  const book = {
    id: '1',
    title: 'Fake Title',
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
  };

  it('Renders', () => {
    render(<Product {...book} />);
    let element = screen.getByText(/Fake Title/i);
    expect(element).toBeInTheDocument();
  });
});
