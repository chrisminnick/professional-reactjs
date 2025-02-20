import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import Cart from './Cart.jsx';

describe('Cart Component', () => {
  const itemsInCart = [
    {
      id: '1',
      title: 'Fake Book',
      price: '10',
    },
  ];
  it('Renders', () => {
    render(<Cart itemsInCart={itemsInCart} />);
    let element = screen.getByText(/Fake/i);
    expect(element).toBeInTheDocument();
  });
});
