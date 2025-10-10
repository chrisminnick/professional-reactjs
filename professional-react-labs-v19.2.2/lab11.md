# Lab 11: Converting App to a Function Component

In this lab, you’ll convert a class-based React component into a function component using hooks.

1. Open your React project in your code editor.

2. Create a new file named `ClassApp.jsx` in the `src` directory and add the following class-based component:

```javascript
import React, { Component } from 'react';

class ClassApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello, Class Component!',
    };
  }

  updateMessage = () => {
    this.setState({ message: 'Hello, Function Component!' });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.updateMessage}>Update Message</button>
      </div>
    );
  }
}

export default ClassApp;
```

3. Create a new file named `FunctionApp.jsx` in the `src` directory and convert the class-based component into a function component:

```javascript
import { useState } from 'react';

function FunctionApp() {
  const [message, setMessage] = useState('Hello, Function Component!');

  const updateMessage = () => {
    setMessage('Hello, Hooks!');
  };

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={updateMessage}>Update Message</button>
    </div>
  );
}

export default FunctionApp;
```

4. Import and use the `FunctionApp` component in your `App.jsx` file:

```javascript
import FunctionApp from './FunctionApp';

function App() {
  return (
    <div>
      <h1>Welcome to React Bookstore</h1>
      <FunctionApp />
    </div>
  );
}

export default App;
```

5. Run your application and verify that the function component works correctly.

6. Experiment with adding more hooks to the `FunctionApp` component, such as `useEffect` or `useReducer`.
