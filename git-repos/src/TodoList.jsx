import PropTypes from 'prop-types';

function TodoList({ todoItems = [], markAsComplete }) {
  return (
    <ul>
      {todoItems.map((item) => (
        <li key={item.id}>
          {item.description}
          <input
            type="checkbox"
            checked={item.completed}
            onChange={() => markAsComplete(item)}
          />
        </li>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todoItems: PropTypes.array.isRequired,
  markAsComplete: PropTypes.func.isRequired,
};

export default TodoList;
