import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import Cart from './Cart.js';

describe('Cart Component', () => {
  it('Renders', () => {
    render(<Cart itemsInCart={[]} />);
    let element = screen.getByText(/cart/i);
    expect(element).toBeInTheDocument();
  });
});
