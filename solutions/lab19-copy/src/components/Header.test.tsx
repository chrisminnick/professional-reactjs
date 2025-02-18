import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import Header from './Header.js';

describe('Header Component', () => {
  it('Renders', () => {
    render(<Header itemsInCart={[{ id: '1', title: 'test', price: '15' }]} />);
    let element = screen.getByText(/Bookstore/i);
    expect(element).toBeInTheDocument();
  });
});
