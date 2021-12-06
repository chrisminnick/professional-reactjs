import { render, screen } from '@testing-library/react';
import Main from './Main';
import renderer from 'react-test-renderer'; 

test('renders testing text', () => {
  render(<Main products = {[{title:'React is Awesome'}]}
               itemsInCart = {[]} 
               addToCart = {jest.fn}
               removeFromCart = {jest.fn}
    />);
  const testText = screen.getByText(/React is Awesome/i);
  expect(testText).toBeInTheDocument();
});


it('renders correctly', () => { 
  
const tree = renderer.create( 
<Main products = {[{title:'React is Awesome'}]}
               itemsInCart = {[]} 
               addToCart = {jest.fn}
               removeFromCart = {jest.fn}
    />).toJSON(); 

expect(tree).toMatchSnapshot(); 
});

