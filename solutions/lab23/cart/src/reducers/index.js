import {combineReducers} from 'redux';
import {cart} from './cart';

export const rootReducer = combineReducers({
	cart: cart
});
