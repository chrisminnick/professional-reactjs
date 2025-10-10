import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import Footer from './Footer.jsx';
import { ThemeProvider } from '../contexts/ThemeContext.jsx';

describe('Footer Component', () => {
  it('Renders', () => {
    render(
      <ThemeProvider>
        <Footer toggleTheme={() => null} />
      </ThemeProvider>
    );
    let element = screen.getByText(/footer/i);
    expect(element).toBeInTheDocument();
  });
});
