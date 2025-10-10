# Lab 17: Redux Thunk

Redux Thunk middleware allows you to write action creators that return functions rather than actions. This function can be used to delay the dispatch of an action, to cause the action to only be dispatched if a condition is met, or to fetch data asynchronously, for example.

In this lab, you'll use Redux Thunk to post a message to a server and receive a response when a **Checkout** button is clicked in the Cart component.

We're going to write an action creator containing a function that will perform an HTTP post. We'll be using the built-in fetch() method to do the API request, and we'll use Redux Thunk with Redux Toolkit's createAsyncThunk function to make the request prior to running a reducer.

## Instructions

1. We're going to write an action creator containing a function that will perform an HTTP post using the **axios** library. So, we'll need to install **axios** first.

```bash
npm install --save axios
```

2. In **actions/index.ts**, import axios at the beginning of the file.

```typescript
import axios from 'axios';
```

3. Import createAsyncThunk into actions/index.js:

```typescript
import { createAsyncThunk } from '@reduxjs/toolkit';
```

4. In **actions/index.js**, add a new action creator for submitting the cart.

```typescript
export const submitCart = createAsyncThunk('CHECKOUT', async (data) => {
  const res = await axios.post('http://localhost:8080/checkout', data);
  return res.data;
});
```

5. Pass the submitCart action creator from App to the Cart.

```jsx
<Cart removeFromCart={props.removeFromCart} submitCart = {props.submitCart} itemsInCart={props.itemsInCart}/>
```

6. Add a button to the Cart that calls the submitCart method when clicked and passes props.cartItems into it. Wrap it in a div element so that it will appear below the cart items and the total.

```jsx
<div><button onClick={()=>props.submitCart(props.itemsInCart)}>
Check Out
</button></div>
```

7. Run your app, add some items to the cart, and then open the Redux DevTools and click the Check Out button. You should see that the CHECKOUT/rejected action is dispatched.

8. Open a new terminal window and change to the **starter/lab17/server** directory.

9. Run `npm install` in the server directory

10. Run the server by entering `npm start`.

11. Click the **Check Out** button in the React app.

You should see that the CHECKOUT/fulfilled action was dispatched. In the browser console, you should see the return data from the server.

Right now, the React Bookstore doesn't do anything in response to the action, because we don't have a reducer that's listening for it. Let's fix that.

12. In **reducers/index.js**, write a new case in the cart reducer for the CHECKOUT action.

```javascript
case 'CHECKOUT/fulfilled':
  return {
  };
```

13. Inside the CHECKOUT case, we'll return the state, with the items array emptied, which will just empty the cart.

```javascript
case 'CHECKOUT/fulfilled':
  return {
    ...state,
    items: []
  };
```

14. Make sure that the server is running, then run `npm start` to build your React app and test it out by adding and removing items from the cart and then checking out.