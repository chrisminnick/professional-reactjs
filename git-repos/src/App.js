import { useEffect, useState } from 'react';

import AddItemForm from './AddItemForm';
import TodoList from './TodoList';

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const [error, setErrorMessage] = useState('');
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function getData() {
      let response = await fetch(
        'https://api.github.com/users/chrisminnick/repos'
      );
      let data = await response.json();
      setRepos(data);
    }
    getData();
  }, []);

  function validateTodoItem(item) {
    setErrorMessage('');
    if (item.length < 2) {
      setErrorMessage('length must be more than two characters.');
      console.log(item);
      console.log(error);
    }
  }

  function addNewItem(newItem) {
    validateTodoItem(newItem);
    if (error) {
      return false;
    }
    setTodoItems([
      ...todoItems,
      { id: todoItems.length, description: newItem, completed: false },
    ]);
  }

  function toggleCompleteStatus(completedItem) {
    let todoItemsCopy = [...todoItems];
    todoItemsCopy = todoItems.map(function (item) {
      if (item.id === completedItem.id) {
        item.completed = !item.completed;
      }
      return item;
    });

    setTodoItems([...todoItemsCopy]);
  }

  return (
    <>
      {console.log(repos)}
      <AddItemForm addNewItem={addNewItem} />
      <p style={{ color: 'red' }}>{error}</p>

      <div>
        Todo:
        <TodoList
          todoItems={todoItems.filter((item) => !item.completed)}
          markAsComplete={toggleCompleteStatus}
        />
      </div>
      <br />
      <div>
        Completed:
        <TodoList
          todoItems={todoItems.filter((item) => item.completed)}
          markAsComplete={toggleCompleteStatus}
        />
      </div>
      <h1>Repo List</h1>

      {repos.map((repo) => (
        <li key={repo.id}>{repo.name}</li>
      ))}
    </>
  );
}

export default App;
