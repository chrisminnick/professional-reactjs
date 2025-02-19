import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import Cart from './Cart.js';
import { Book } from '../types/book.js';
const mockSubmitCart = vi.fn((data: Book[]) => {});
const mockRemoveFromCart = vi.fn((idToRemove: string) => {});
describe('Cart Component', () => {
  it('Renders', () => {
    render(
      <Cart
        itemsInCart={[
          { id: '1', title: 'testing is fun', price: '10000' },
          { id: '2', title: 'good book', price: '2' },
        ]}
        removeFromCart={mockRemoveFromCart}
        submitCart={mockSubmitCart}
      />
    );
    let element = screen.getByText(/cart/i);
    expect(element).toBeInTheDocument();
  });
  it('calculates total correctly', () => {
    render(
      <Cart
        itemsInCart={[
          { id: '1', title: 'testing is fun', price: '10000' },
          { id: '2', title: 'good book', price: '2' },
        ]}
        removeFromCart={mockRemoveFromCart}
        submitCart={mockSubmitCart}
      />
    );
    expect(screen.getByText(/10002/)).toBeInTheDocument();
  });
});
