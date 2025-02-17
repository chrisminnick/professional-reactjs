import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import Footer from './Footer.js';

describe('Footer Component', () => {
  it('Renders', () => {
    render(<Footer />);
    let element = screen.getByText(/footer/i);
    expect(element).toBeInTheDocument();
  });
});
