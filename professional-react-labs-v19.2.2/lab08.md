# Lab 08: Adding State

In this lab, you’ll learn how to use React’s `useState` hook to add state to your components.

1. Open your React project in your code editor.

2. Create a new component named `Counter.jsx` in the `src` directory:

```javascript
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
```

3. Import and use the `Counter` component in your `App.jsx` file:

```javascript
import Counter from './Counter';

function App() {
  return (
    <div>
      <h1>Welcome to React Bookstore</h1>
      <Counter />
    </div>
  );
}

export default App;
```

4. Run your application and verify that the counter works correctly.

5. Experiment with adding more state variables to the `Counter` component, such as a `step` variable to control the increment/decrement amount.
