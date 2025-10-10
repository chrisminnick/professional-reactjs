import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import Header from './Header.js';
import { ThemeProvider } from '../contexts/ThemeContext.jsx';

describe('Header Component', () => {
  it('Renders', () => {
    render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );
    let element = screen.getByText(/Bookstore/i);
    expect(element).toBeInTheDocument();
  });
});
