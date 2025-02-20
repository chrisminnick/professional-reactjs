import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import Header from './Header';

describe('Header Component', () => {
  it('Renders', () => {
    render(
      <Header
        itemsInCart={[
          { id: '1', title: 'testing is fun', price: '10000' },
          { id: '2', title: 'good book', price: '2' },
        ]}
      />
    );
    let element = screen.getByText(/Bookstore/i);
    expect(element).toBeInTheDocument();
  });
});
