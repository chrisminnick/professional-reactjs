import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import ProductList from './ProductList.jsx';

describe('ProductList Component', () => {
  it('Renders', () => {
    render(<ProductList />);
    let element = screen.getAllByText(/title/i);
    expect(element[0]).toBeInTheDocument();
  });
});
