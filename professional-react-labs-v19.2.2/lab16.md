# Lab 16: Implementing Redux

As your application grows, you may find it useful to transition to Redux. It's unlikely that our existing app would benefit at this point from Redux, but the process that we'll go through to convert it to Redux will show you the steps involved in a simplified example.

## Instructions

1. Install Redux, the react-redux library, and Redux toolkit.

```bash
npm install --save redux react-redux @reduxjs/toolkit
```

## Step 1: Create a store

2. In main.tsx, import configureStore from Redux toolkit.

```tsx
import { configureStore } from '@reduxjs/toolkit';
```

3. In main.tsx, configure the store:

```tsx
const store = configureStore({ reducer: rootReducer });
```

4. Import combineReducers from redux.

```tsx
import {combineReducers} from 'redux';
```

5. Import Provider from react-redux.

```tsx
import {Provider} from 'react-redux';
```

6. Import the reducers (which we'll create in a moment).

```tsx
import {cart, products} from './reducers';
```

7. Create the root reducer.

```tsx
const rootReducer = combineReducers({
  cart: cart,
  products: products
});
```

8. Wrap the App component in a Provider and pass the store to Provider as a prop.

```tsx
createRoot(rootElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

## Step 2: Write the reducers

9. Create a directory in **src** named **reducers**.

10. Create **index.js** inside **reducers**.

The next step is to define the ways in which the state of the cart can change. Changes in redux happen in response to actions. So, our reducer needs to listen for certain actions that correspond to different changes in the state of the cart and then make those changes.

11. Write and export the cart reducer function as a module. The cart reducer contains a switch statement with a case for each possible action that can happen in the cart.

```javascript
export function cart(state = { items: [] }, action = {}){
  switch(action.type) {
    case 'CART_ADD':
      return; //todo: finish this
    case 'CART_REMOVE':
      return; //todo: finish this
    default:
      return state; //no relevant action type
  }
}
```

12. Inside the CART_ADD case, use the functionality from the addToCart function (in **App.tsx**) to add the productId passed by the action to the items array.

```javascript
case 'CART_ADD':
  return {
    ...state,
    items: [...state.items, action.payload],
  };
```

13. Inside the CART_REMOVE case, use the functionality from the removeFromCart function (in **App.tsx**) to remove the productId passed to it from the items array.

```javascript
case 'CART_REMOVE':
  return {
    ...state,
    items: state.items.filter(
      (item) => item.id !== action.payload.productId
    ),
  };
```

14. Write and export the products reducer function (also in **reducers/index.js**). It should have one case, named LOAD_PRODUCTS which will update the state with the list of products.

```javascript
export function products(state = { products: [] }, action = {}) {
  switch (action.type) {
    case 'LOAD_PRODUCTS':
      return {
        ...state,
        products: action.products
      };
    default:
      return state; //no relevant action type 
  }
}
```

## Step 3: Write the Actions and Action Creators

15. Create a new directory in **src**, named **actions**.

16. Create a file named **index.js** inside **actions**, then write (and export) the functions inside it that will create the actions that trigger changes to the state inside the reducers we just wrote.

```javascript
export function addToCart(product) {
  return {
    type: 'CART_ADD',
    payload: {
      ...product
    }
  }
}

export function removeFromCart(productId) {
  return {
    type: 'CART_REMOVE',
    payload: {
      productId
    }
  }
}

export function loadProducts(products) {
  return {type: 'LOAD_PRODUCTS', products}
}
```

Now that we have the action creators that will be dispatched when the user interacts with the application, and we have the reducers that will mutate the state in response to those actions, the last step is to hook up the user interactions (button clicks) to the dispatch of the actions.

17. Import the action creator functions, the connect method of react-redux, and the bindActionCreator method into **pages/App.tsx**.

```tsx
import * as actionCreators from '../actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
```

18. In **App.tsx** (below the function, but above the export statement) map the state to props and bind the action creators to the dispatcher.

```tsx
const mapStateToProps = (state: any, props: any) => {
  return {
    itemsInCart: state.cart.items,
    products: state.products.products,
  };
};

const mapDispatchToProps = (dispatch: any, props: any) => {
  return bindActionCreators(actionCreators, dispatch);
};
```

19. Use the connect method to merge mapStateToProps and mapDispatchToProps into App in the export statement at the bottom of **App.tsx**.

```tsx
export default connect(mapStateToProps, mapDispatchToProps)(App);
```

## Step 4: Modify App.tsx to use the Redux store.

20. In **App.tsx**, remove the following:
    - The useState function calls for itemsInCart and for products.
    - The addToCart method
    - The removeFromCart method

21. Make sure the props object is a parameter of App

```tsx
function App(props) {
```

22. Update the useEffect method to call the loadProducts method and pass it the products array from the custom hook. Make sure to put products into the dependency array so the effect with run when the custom hook returns the data.

```tsx
useEffect(() => {
  props.loadProducts(products);
}, [products]);
```

23. Modify the props passed to the ProductList and Cart components to use the props that are passed in from the connection to the Redux store.

```tsx
<div className="col-md-8">
  <ProductList
    addToCart={props.addToCart}
    removeFromCart={props.removeFromCart}
    itemsInCart={props.itemsInCart}
    products={props.products}
  />
</div>
<div className="col-md-4">
  <Cart itemsInCart={props.itemsInCart} />
</div>
```

24. Fix any typescript errors that you have.

25. Try converting reducers/index.js and actions/index.js to TypeScript.

Test it out! Everything should now work with no additional changes.

26. Add a 'Remove' button to the CartItem component that causes the item to be removed from the cart.

## Step 5: Looking at Redux Toolkit

27. Redux Toolkit has a standard Vite template that demonstrates some best practices and patterns for using Redux. Run the following command outside of your react-bookstore folder to create a project with the Redux Toolkit template.

```bash
npx degit reduxjs/redux-templates/packages/vite-template-redux my-app
```

28. CD into the new project and run `npm install`.

29. Run `npm run dev` to see it running, then look through the code at how it works. Can you apply some of the other Redux Toolkit methods and conventions to the React Bookstore?