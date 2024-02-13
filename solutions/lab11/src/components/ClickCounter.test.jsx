import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import ClickCounter from './ClickCounter.jsx';

describe('ClickCounter Component', () => {
  it('Renders', () => {
    render(<ClickCounter />);
    let element = screen.getByText(/0/i);
    expect(element).toBeInTheDocument();
  });
});
