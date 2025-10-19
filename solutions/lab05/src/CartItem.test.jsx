import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import CartItem from './CartItem.jsx';

describe('CartItem Component', () => {
  it('Renders', () => {
    render(<CartItem />);
    let element = screen.getByText(/\$/i);
    expect(element).toBeInTheDocument();
  });
});
