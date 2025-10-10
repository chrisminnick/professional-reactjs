# Lab 12: Creating and using a color theme context

React's Context API gives you a way to bypass passing data via props. Context is useful for data that's needed in many different components or that are deeply nested in the component hierarchy. In this lab, you'll create a color theme switcher.

## Instructions

1. Create a new folder named context inside src.

2. Create a new file named ThemeContext.jsx in your src/context directory.

3. Import createContext and useState into ThemeContext.jsx.

```jsx
import { createContext, useState } from 'react';
```

4. Use the createContext function to create a new context.

```jsx
const ThemeContext = createContext();
```

5. Create a provider component that will hold the state for the theme and provide it to the rest of the app.

```jsx
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
```

6. In your main.jsx file, wrap your app with the ThemeProvider to make the theme context available throughout the app.

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from './context/ThemeContext';
import App from './components/App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
```

Now you can use the ThemeContext in any component by importing the useContext hook and the ThemeContext. Let's try it with the footer.

7. Import useContext and ThemeContext into Footer.jsx.

```jsx
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
```

8. Inside Footer(), pass the ThemeContext to useContext and destructure it to get the theme and the toggleTheme function.

```jsx
const { theme, toggleTheme } = useContext(ThemeContext);
```

9. Modify the footerStyle object to switch the backgroundColor and the color properties between white and black based on the value of theme.

```jsx
const footerStyle = {
  backgroundColor: theme === 'light' ? 'white' : 'black',
  color: theme === 'light' ? 'black' : 'white',
  padding: '10px',
  position: 'fixed',
  left: '0',
  bottom: '0',
  margin: '0',
  width: '100%',
};
```

10. Add a button to the footer that will toggle the theme:

```jsx
return (
  <p style={footerStyle}>
    This is the footer.
    <button onClick={toggleTheme}>Toggle Theme</button>
  </p>
);
```

11. Run `npm run dev` and test it out!

12. See if you can figure out how to modify the theme of other components when you toggle the theme using the button in the Footer.

13. Run your tests and notice that the tests for App and Footer fail. To fix them, you need to import the ThemeProvider into their test files and wrap the element you're rendering with it, for example:

```jsx
describe('Footer Component', () => {
  it('Renders', () => {
    render(<ThemeProvider><Footer /></ThemeProvider>);
    let element = screen.getByText(/footer/i);
    expect(element).toBeInTheDocument();
  });
});
```