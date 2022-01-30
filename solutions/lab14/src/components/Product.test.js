import { render, screen } from '@testing-library/react';
import {shallow} from 'enzyme';
import Product from './Product';

test('renders testing text', () => {
  const component = shallow(
  <Product
    title='React is Awesome'
    author='Chris'
    addToCart = {jest.fn}
    removeFromCart = {jest.fn}
  />);
	expect(component.text()).toContain('React is Awesome');
});
