import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import Cart from './Cart.js';

describe('Cart Component', () => {
  it('Renders', () => {
    render(<Cart itemsInCart={[]} />);
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
      />
    );
    expect(screen.getByText(/10002/)).toBeInTheDocument();
  });
});
