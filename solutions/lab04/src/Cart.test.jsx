import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import Cart from './Cart.jsx';

describe('Cart Component', () => {
  it('Renders', () => {
    render(<Cart />);
    let element = screen.getByText(/cart/i);
    expect(element).toBeInTheDocument();
  });
});
