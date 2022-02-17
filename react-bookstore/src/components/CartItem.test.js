import { render, screen } from '@testing-library/react';
import CartItem from './CartItem';
import { shallow } from 'enzyme';

test('renders', () => {
  render(<CartItem title="test" price="test" />);
  const cartElement = screen.getByTestId(/itemInCart/i);
  expect(cartElement).toBeInTheDocument();
});

test('renders without crashing', () => {
  const component = shallow(<CartItem title="test book" price="6" />);
  expect(component.text()).toEqual('test book - 6');
  //console.log(component.debug());
});
