import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects'
import * as Api from '../apis';

// worker Saga: will be fired on SUBMIT_CART actions
function* checkout(action) {
   try {
      const response = yield call(Api.submitCart, action.payload);
      yield put({type: "CHECKOUT_SUCCEEDED", response: response});
      console.log(response);
   } catch (e) {
      yield put({type: "CHECKOUT_FAILED", message: e.message});
   }
}



/*
  Starts submitCart on each dispatched `SUBMIT_CART` action.
  uses takeLatest so that if SUBMIT_CART is dispatched while 
  a fetch is already pending, the pending fetch will be canceled 
  and the latest one will be run.

  To take every action, use takeEvery instead.
*/
function* watchSubmitCart() {
  yield takeLatest("SUBMIT_CART", checkout);
}

function* watchGetProducts() {
   yield takeEvery("GET_PRODUCTS", getProducts);
}

export default function* rootSaga() {
   yield all([
     watchGetProducts(),
     watchSubmitCart()
   ])
}
