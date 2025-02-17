import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import ProductList from './ProductList.tsx';

describe('ProductList Component', () => {
  it('Renders', () => {
    render(
      <ProductList
        addToCart={vi.fn}
        removeFromCart={vi.fn}
        itemsInCart={[]}
        products={[{ title: 'title', price: '1', id: '1' }]}
      />
    );
    let element = screen.getAllByText(/title/i);
    expect(element[0]).toBeInTheDocument();
  });
});
