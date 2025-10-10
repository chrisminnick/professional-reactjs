# Lab 13: Custom Hooks

Custom hooks aren't a built-in feature of React. Instead, they're a technique. A custom hook is a function that uses other hooks (such as useState and useEffect) to make reusable functionality available to components.

Follow these steps to create a custom hook to simplify the process of using the ThemeContext.

## Instructions

1. Open contexts/ThemeContext.jsx

2. Import useContext from react.

3. After the export statement for the ThemeProvider create a new module for the theme hook:

```jsx
export const useTheme = () => {
  const context = useContext(ThemeContext);
  
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
};
```

4. Remove the imports of useContext and ThemeContext from Footer.jsx and replace it with the import for useTheme():

```jsx
import {useTheme} from '../contexts/ThemeContext';
```

5. Remove the call to useContext and replace it with a call to useTheme():

```jsx
const { theme, toggleTheme } = useTheme();
```

6. Run `npm run dev` and test it out.

Hooks that aren't connected to Context are usually kept in a folder in src named hooks. For example, you could create a custom hook from the fetchData() function in App.jsx or from the shuffleData function. Doing so will simplify App and potentially make this functionality available to other components that may need it.

7. Create the src/hooks folder.

8. Create a new file in /hooks named useBooks.js

Notice that hooks aren't typically named with .jsx. This is because they don't return JSX.

9. Try to extract the fetchData functionality from App.jsx into a function named useBooks() that returns an array containing the products array and the isLoading status.

Check the solution file if you need help!

10. Remove the useState() and useEffect function calls from App.

11. Import useBooks() into App.jsx and use it to get the values of products and isLoading.

12. **Challenge:** Create a useCart() hook that exports the itemsInCart array, the addToCart function, and the removeFromCart function.