# Lab 10: Component Lifecycle and AJAX

In this lab, you’ll learn about React’s component lifecycle methods and how to make AJAX requests in a React application.

1. Open your React project in your code editor.

2. Create a new component named `UserList.jsx` in the `src` directory:

```javascript
import { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
```

3. Import and use the `UserList` component in your `App.jsx` file:

```javascript
import UserList from './UserList';

function App() {
  return (
    <div>
      <h1>Welcome to React Bookstore</h1>
      <UserList />
    </div>
  );
}

export default App;
```

4. Run your application and verify that the list of users is displayed correctly.

5. Experiment with adding more lifecycle-related functionality, such as cleaning up resources or handling errors in the `useEffect` hook.
