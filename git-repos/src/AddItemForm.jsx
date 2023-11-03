import { useState } from 'react';
import PropTypes from 'prop-types';

function AddItemForm(props) {
  const [newItem, setNewItem] = useState('');

  return (
    <div>
      new todo: {newItem}
      <br />
      <input
        type="text"
        id="newItem"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={() => props.addNewItem(newItem)}>Add New Item</button>
    </div>
  );
}

AddItemForm.propTypes = {
  addNewItem: PropTypes.func.isRequired,
};
export default AddItemForm;
