import { render, screen } from '@testing-library/react';
import {shallow} from 'enzyme';
import Main from './Main';

test('renders testing text', () => {
  const component = shallow(<Main products = {[{title:'React is Awesome'}]}
  itemsInCart = {[]} 
  addToCart = {jest.fn}
  removeFromCart = {jest.fn}
/>);
	expect(component.text())
  .toEqual('<ProductList /><Cart />');
});
