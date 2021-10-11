import { render, screen } from '@testing-library/react';
import Main from './Main';

const mockAddToCart = jest.fn();
const mockRemoveFromCart = jest.fn();

test('Contains a test product', () => {
  render(<Main addToCart={mockAddToCart}
               removeFromCart={mockRemoveFromCart}
               products={[{
                "id": "1",
                "title": "Things Fall Apart",
                "author": "Chinua Achebe",
                "published": "1958",
                "country": "Nigeria",
                "lang": "English",
                "pages": "209",
                "image": "things-fall-apart.jpg",
                "url": "https://en.wikipedia.org/wiki/Things_Fall_Apart",
                "price": "5"
            }]}
               itemsInCart={[]} />);
  const testText = screen.getByText(/Things Fall Apart/i);
  expect(testText).toBeInTheDocument();
});
