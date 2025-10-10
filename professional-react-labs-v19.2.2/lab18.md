# Lab 18: Persisting data in localStorage using Redux

Our application is now using React and Redux together. We've implemented an Ajax call to fetch the initial data for our store. But we have an opportunity for improvement. Note that every time you refresh the page, it forgets what was in the cart. What if our user wants to close the browser and then come back at a different time?

In this lab, we'll fix that by writing our cart to localStorage every time it changes. And we'll read the stored cart whenever the client starts up our application.

## Instructions

1. Add a new action creator to actions/index.js for reading the cart from localStorage:

```javascript
export function readCartFromLocalStorage() {
  let cart = localStorage.getItem('itemsInCart');
  cart = JSON.parse(cart);
  console.log(cart);
  return {
    type: 'READ_CART',
    payload: cart || [],
  };
}
```

2. Create a new reducer case for "READ_CART".

```javascript
case 'READ_CART':
  return {
    ...state,
    items: action.payload || [],
  };
```

3. Import readCartFromLocalStorage into useBooks.

4. Import useDispatch from react-redux into useBooks.

5. Call useDispatch inside useBooks() to return the dispatch function.

```javascript
const dispatch = useDispatch();
```

6. After the products are loaded, call dispatch(readCartFromLocalStorage);

7. Run and test. You should have no errors, but you should still see an empty cart.

Why? Because there is nothing in localStorage yet.

Let's write to localStorage now. We'll do it after every change to the cart.

We should write something to local storage after every change to the cart.

8. After the line in main.tsx that creates the store, subscribe localStorage to the store, so that whenever the store changes the cart will be written to localstorage:

```javascript
store.subscribe(() => {
  localStorage.setItem(
    'itemsInCart',
    JSON.stringify(store.getState().cart.items)
  );
});
```

9. Run and test. Can you now add books and remove books and have them persist each time you re-visit the bookstore? If so, you've got it right!