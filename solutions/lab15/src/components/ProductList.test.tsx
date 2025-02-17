import React from 'react';
import { describe, expect, beforeEach, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import ProductList from './ProductList';

beforeEach(() => {
  render(
    <ProductList
      products={[
        {
          id: '1',
          title: 'Things Fall Apart',
          author: 'Chinua Achebe',
          published: '1958',
          country: 'Nigeria',
          lang: 'English',
          pages: '209',
          image: 'things-fall-apart.jpg',
          url: 'https://en.wikipedia.org/wiki/Things_Fall_Apart',
          price: '5',
        },
        {
          id: '2',
          title: 'Things Still Fall Apart',
          author: 'Chinua Achebe',
          published: '1958',
          country: 'Nigeria',
          lang: 'English',
          pages: '209',
          image: 'things-fall-apart.jpg',
          url: 'https://en.wikipedia.org/wiki/Things_Fall_Apart',
          price: '5',
        },
      ]}
      itemsInCart={[{ id: '2', title: 'Things Still Fall Apart', price: '5' }]}
      addToCart={vi.fn}
      removeFromCart={vi.fn}
    />
  );
});

describe('ProductList Component', () => {
  it('Renders', () => {
    let element = screen.getAllByText(/Things Still Fall Apart/i);
    expect(element[0]).toBeInTheDocument();
  });
  it('correctly displays Remove from Cart message', () => {
    expect(screen.getByText(/Things Still Fall Apart/)).toBeInTheDocument();
    expect(screen.getByText(/Remove from Cart/)).toBeInTheDocument();
  });
});
