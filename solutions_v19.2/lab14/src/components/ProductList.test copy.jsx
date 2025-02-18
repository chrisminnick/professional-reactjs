import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import ProductList from './ProductList.js';

describe('ProductList Component', () => {
  it('Renders', () => {
    render(
      <ProductList products={[{ title: 'title', price: '1', id: '1' }]} />
    );
    let element = screen.getAllByText(/title/i);
    expect(element[0]).toBeInTheDocument();
  });
});
