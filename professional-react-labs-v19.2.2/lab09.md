# Lab 09: Interactions, Events, and Callbacks

In this lab, you’ll learn how to handle user interactions and events in React components.

1. Open your React project in your code editor.

2. Create a new component named `Button.jsx` in the `src` directory:

```javascript
function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}

export default Button;
```

3. Create a new component named `ButtonGroup.jsx` in the `src` directory:

```javascript
import Button from './Button';

function ButtonGroup() {
  const handleClick = (label) => {
    alert(`You clicked: ${label}`);
  };

  return (
    <div>
      <Button label="Button 1" onClick={() => handleClick('Button 1')} />
      <Button label="Button 2" onClick={() => handleClick('Button 2')} />
      <Button label="Button 3" onClick={() => handleClick('Button 3')} />
    </div>
  );
}

export default ButtonGroup;
```

4. Import and use the `ButtonGroup` component in your `App.jsx` file:

```javascript
import ButtonGroup from './ButtonGroup';

function App() {
  return (
    <div>
      <h1>Welcome to React Bookstore</h1>
      <ButtonGroup />
    </div>
  );
}

export default App;
```

5. Run your application and verify that clicking each button displays the correct alert message.

6. Experiment with adding more buttons to the `ButtonGroup` component and handling different types of events, such as mouse hover or double-click.
