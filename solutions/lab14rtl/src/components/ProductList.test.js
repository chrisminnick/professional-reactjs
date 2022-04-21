import { render, screen } from '@testing-library/react';
import ProductList from './ProductList';

it('renders testing text', () => {
  render(
    <ProductList
      products={[
        {
          id: '1',
          title: 'Things Fall Apart',
          author: 'Chinua Achebe',
          published: '1958',
          country: 'Nigeria',
          lang: 'English',
          pages: '209',
          image: 'things-fall-apart.jpg',
          url: 'https://en.wikipedia.org/wiki/Things_Fall_Apart',
          price: '5',
        },
        {
          id: '2',
          title: 'Things Still Fall Apart',
          author: 'Chinua Achebe',
          published: '1958',
          country: 'Nigeria',
          lang: 'English',
          pages: '209',
          image: 'things-fall-apart.jpg',
          url: 'https://en.wikipedia.org/wiki/Things_Fall_Apart',
          price: '5',
        },
      ]}
      itemsInCart={['2']}
      addToCart={jest.fn}
      removeFromCart={jest.fn}
    />
  );
  console.log(screen.debug());

  expect(screen.getByText(/Things Fall Apart/)).toBeInTheDocument();
  const productList = screen.getByTestId('product-list');
  expect(productList).toHaveClass('productList');
  expect(screen.getByText(/In Cart/)).toBeInTheDocument();
});
