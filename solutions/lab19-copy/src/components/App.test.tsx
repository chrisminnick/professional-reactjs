import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import App from './App.js';

describe('App Component', () => {
  it('Renders', () => {
    render(<App />);
    let element = screen.getByText(/Loading/i);
    expect(element).toBeInTheDocument();
  });
});
