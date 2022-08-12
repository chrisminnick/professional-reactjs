thunkedDispatch(function getUserData(){})

function getUserData(){
    return {type: 'setUserData', payload: {username,authkey}}
}


let store = {
  userData: [],
  products: [{}, {}, {}],
  cart: [],
  customers: [],
  vendors: [],
  locations: [],
};

function userData(store=[], action) {
    switch (action.type){
        case("setUserData"):
        newStore: {...store,action.payload}
        break;
    }
    return newStore;
}

const rootReducer = combineReducers(productReducer, cartReducer, locations);

function productReducer(store, action) {
  return store.products;
}

function cartReducer(store, action) {
  return store.cart;
}

function locations(store, action) {
  return store.locations;
}

state = rootReducer();
