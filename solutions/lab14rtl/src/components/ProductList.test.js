import { render, screen } from '@testing-library/react';
import {shallow} from 'enzyme';
import ProductList from './ProductList';

test('renders testing text', () => {
  const component = shallow(
  <ProductList
    products = {[{id:"0",title:'React is Awesome'},{id:"1",title:'Whoohoo!'}]}
    itemsInCart = {[]} 
    addToCart = {jest.fn}
    removeFromCart = {jest.fn}
  />);
	expect(component.text())
  .toEqual('<Product /><Product />');
});
