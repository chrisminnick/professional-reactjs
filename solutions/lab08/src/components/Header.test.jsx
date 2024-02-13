import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import Header from './Header.jsx';

describe('Header Component', () => {
  it('Renders', () => {
    render(<Header />);
    let element = screen.getByText(/Bookstore/i);
    expect(element).toBeInTheDocument();
  });
});
