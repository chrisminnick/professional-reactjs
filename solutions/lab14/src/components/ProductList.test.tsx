import React from 'react';
import { describe, expect, beforeEach, afterEach, it, vi } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import ProductList from './ProductList';

// Clean up after each test to prevent interference
afterEach(() => {
  cleanup();
});

describe('ProductList Component', () => {
  it('Renders', () => {
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
        addToCart={vi.fn()}
        removeFromCart={vi.fn()}
      />
    );
    let element = screen.getAllByText(/Things Still Fall Apart/i);
    expect(element[0]).toBeInTheDocument();
  });

  it('correctly displays Remove from Cart message', () => {
    render(
      <ProductList
        products={[
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
        addToCart={vi.fn()}
        removeFromCart={vi.fn()}
      />
    );
    expect(screen.getByText(/Things Still Fall Apart/)).toBeInTheDocument();
    expect(screen.getByText(/Remove from Cart/)).toBeInTheDocument();
  });

  it('renders all products passed in props', () => {
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
        itemsInCart={[]}
        addToCart={vi.fn()}
        removeFromCart={vi.fn()}
      />
    );
    expect(screen.getByText(/Things Fall Apart/)).toBeInTheDocument();
    expect(screen.getByText(/Things Still Fall Apart/)).toBeInTheDocument();
  });

  it('displays Add to Cart for products not in cart', () => {
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
        ]}
        itemsInCart={[]}
        addToCart={vi.fn()}
        removeFromCart={vi.fn()}
      />
    );
    expect(screen.getByText(/Add to Cart/)).toBeInTheDocument();
  });

  it('calls addToCart when Add to Cart is clicked', () => {
    const addToCartMock = vi.fn();
    render(
      <ProductList
        products={[
          {
            id: '3',
            title: 'New Book',
            author: 'Author',
            published: '2020',
            country: 'USA',
            lang: 'English',
            pages: '100',
            image: '',
            url: '',
            price: '10',
          },
        ]}
        itemsInCart={[]}
        addToCart={addToCartMock}
        removeFromCart={vi.fn()}
      />
    );
    screen.getByText(/Add to Cart/).click();
    expect(addToCartMock).toHaveBeenCalled();
  });

  it('calls removeFromCart when Remove from Cart is clicked', () => {
    const removeFromCartMock = vi.fn();
    render(
      <ProductList
        products={[
          {
            id: '4',
            title: 'Book In Cart',
            author: 'Author',
            published: '2021',
            country: 'USA',
            lang: 'English',
            pages: '150',
            image: '',
            url: '',
            price: '15',
          },
        ]}
        itemsInCart={[{ id: '4', title: 'Book In Cart', price: '15' }]}
        addToCart={vi.fn()}
        removeFromCart={removeFromCartMock}
      />
    );
    screen.getByText(/Remove from Cart/).click();
    expect(removeFromCartMock).toHaveBeenCalled();
  });

  it('handles empty products array gracefully', () => {
    render(
      <ProductList
        products={[]}
        itemsInCart={[]}
        addToCart={vi.fn()}
        removeFromCart={vi.fn()}
      />
    );
    const productListElement = screen.getByTestId('product-list');
    expect(productListElement.children.length).toBe(0);
  });

  it('handles empty itemsInCart gracefully', () => {
    render(
      <ProductList
        products={[
          {
            id: '5',
            title: 'Book Not In Cart',
            author: 'Author',
            published: '2022',
            country: 'USA',
            lang: 'English',
            pages: '200',
            image: '',
            url: '',
            price: '20',
          },
        ]}
        itemsInCart={[]}
        addToCart={vi.fn()}
        removeFromCart={vi.fn()}
      />
    );
    expect(screen.getByText(/Add to Cart/)).toBeInTheDocument();
  });
});
