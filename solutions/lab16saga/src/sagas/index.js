import { call, put, takeEvery } from 'redux-saga/effects';
import * as Api from '../apis';

// worker Saga: will be fired on SUBMIT_CART actions
function* checkout(action) {
  try {
    const response = yield call(Api.submitCart, action.payload);
    yield put({ type: 'CHECKOUT_SUCCEEDED', response: response });
    console.log(response);
  } catch (e) {
    yield put({ type: 'CHECKOUT_FAILED', message: e.message });
  }
}

/* function* fetchProducts(action) {
   try {
      const response = yield call(Api.fetchProducts, action.payload);
      yield put({type: "PRODUCTS_FETCHED", response: response});
      console.log(response);
   } catch (e) {
      yield put({type: "PRODUCT_FETCH_FAILED", message: e.message});
   }
} */
/*
  Starts submitCart on each dispatched `SUBMIT_CART` action.
*/
function* mySaga() {
  yield takeEvery('SUBMIT_CART', checkout);
}

export default mySaga;
