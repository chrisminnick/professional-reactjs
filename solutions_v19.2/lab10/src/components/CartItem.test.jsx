import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import CartItem from './CartItem.jsx';

describe('CartItem Component', () => {
  const itemInCart = {
    id: '1',
    title: 'Fake Book',
    price: '10',
  };
  it('Renders', () => {
    render(<CartItem {...itemInCart} />);
    let element = screen.getByText(/Fake/i);
    expect(element).toBeInTheDocument();
  });
});
