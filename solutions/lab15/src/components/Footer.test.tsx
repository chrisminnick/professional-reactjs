import { describe, expect, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import Footer from './Footer.js';
import { ThemeProvider } from '../contexts/ThemeContext.jsx';

describe('Footer Component', () => {
  it('Renders', () => {
    render(
      <ThemeProvider>
        <Footer />
      </ThemeProvider>
    );
    let element = screen.getByText(/footer/i);
    expect(element).toBeInTheDocument();
  });

  it('switches between light and dark mode when button is pressed', () => {
    render(
      <ThemeProvider>
        <Footer />
      </ThemeProvider>
    );
    const button = screen.getByText(/Toggle Theme/i);
    fireEvent.click(button);
    const toggleButton = screen.getByText(/This is the footer./i);
    expect(toggleButton).toHaveClass('dark');
  });
  it('toggles back to dark mode', () => {
    render(
      <ThemeProvider>
        <Footer />
      </ThemeProvider>
    );
    const button = screen.getByText(/Toggle Theme/i);
    fireEvent.click(button);
    const toggleButton = screen.getByText(/This is the footer./i);
    expect(toggleButton).toHaveClass('dark');
    fireEvent.click(button);
    expect(toggleButton).toHaveClass('light');
  });

  it('throws an error when no context is provided', () => {
    expect(() => render(<Footer />)).toThrow(
      'useTheme must be used within a ThemeProvider'
    );
  });
});
