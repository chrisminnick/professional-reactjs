# Lab 19: React Router

In this lab, you'll use React Router to create a separate route for the shopping cart.

## Instructions

1. Install react-router-dom

```bash
npm install react-router-dom
```

2. Import BrowserRouter as Router into **main.tsx** and wrap the Router component around the `<Provider>` element in createRooter.render()

3. In **App.tsx**, import Routes and Route from react-router-dom.

4. In App's return statement, change the page layout to a 1-column layout by removing the `</div>` and `<div>` from between Cart and ProductList and changing the className passed to the outside div to col-md-12.

5. Replace ProductList and Cart with a Routes component containing two Routes. The first should render ProductList when the path is exactly '/' and the second should render Cart when the path is '/cart'.

```jsx
<Routes>
  <Route
    path="/"
    element={
      <ProductList
        products={products}
        itemsInCart={props.itemsInCart}
        addToCart={props.addToCart}
        removeFromCart={props.removeFromCart}
      />
    }
  />
  <Route
    path="/cart"
    element={
      <Cart
        itemsInCart={props.itemsInCart}
        removeFromCart={props.removeFromCart}
        submitCart={props.submitCart}
      />
    }
  />
</Routes>
```

6. Test it out. When you first start up the app (and the route is '/') it should display the ProductList, and if you change the url in the address bar to '/cart' it should display the cart. Everything should still work.

7. Import Link from react-router-dom into Header and create a nav bar that links to the home page and to the cart.

8. **Challenge:** Make a Shopping Cart button component that displays the number of items in the cart in the header and that links to the shopping cart (using react-router-dom's Link component). You can use the fontawesome React component to render the icon: **https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react**