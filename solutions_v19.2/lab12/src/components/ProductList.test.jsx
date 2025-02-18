import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import ProductList from './ProductList.jsx';

describe('ProductList Component', () => {
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
  const itemsInCart = [
    {
      id: '1',
      title: 'Fake Book',
      price: '10',
    },
  ];
  it('Renders', () => {
    render(<ProductList itemsInCart={itemsInCart} products={[book]} />);
    let element = screen.getAllByText(/Fake Title/i);
    expect(element[0]).toBeInTheDocument();
  });
});
