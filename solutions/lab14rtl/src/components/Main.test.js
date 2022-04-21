import { render, screen } from '@testing-library/react';
import Main from './Main';
test('renders testing text', () => {
  render(
    <Main
      products={[{ title: 'React is Awesome' }]}
      itemsInCart={[]}
      addToCart={jest.fn}
      removeFromCart={jest.fn}
    />
  );
  expect(screen.getByText(/React is Awesome/)).toBeInTheDocument();
});
