# Lab 06: Styling React

In this lab, you’ll learn how to style your React components using CSS and inline styles.

1. Open your React project in your code editor.

2. Create a new CSS file named `styles.css` in the `src` directory.

3. Add the following styles to `styles.css`:

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 0;
}

h1 {
  color: #333;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
```

4. Import the `styles.css` file into your `App.jsx` file:

```javascript
import './styles.css';
```

5. Add inline styles to one of your components. For example, modify the `Footer.jsx` component to include inline styles:

```javascript
function Footer() {
  const footerStyle = {
    backgroundColor: 'black',
    color: 'white',
    padding: '10px',
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
    textAlign: 'center',
  };

  return <footer style={footerStyle}>This is the footer.</footer>;
}

export default Footer;
```

6. Run your application and verify that the styles are applied correctly.

7. Experiment with adding more styles to your components and CSS file.
