import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import Product from './Product.jsx';

describe('Product Component', () => {
  it('Renders', () => {
    render(<Product />);
    let element = screen.getByText(/title/i);
    expect(element).toBeInTheDocument();
  });
});
