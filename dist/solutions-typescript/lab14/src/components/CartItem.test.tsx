import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import CartItem from './CartItem.js';

describe('CartItem Component', () => {
  it('Renders', () => {
    render(<CartItem title="The Selfish Gene" price="15" />);
    let element = screen.getByText(/\$/i);
    expect(element).toBeInTheDocument();
  });
});
