import React, { useState } from 'react';
import './PartEnquiry.css';


const PartEnquiry = ({ parts, setParts, setTodos }) => {
  const [newTodoText, setNewTodoText] = useState('');

  const addTodo = () => {
    if (!newTodoText) {
      alert('Please select an option before adding.');
      return;
    }
    setTodos((prevTodos) => [...prevTodos, newTodoText]);
    setParts((prevParts) => [...prevParts, newTodoText]); // Update parts state
    setNewTodoText(''); // Clear input field after adding
  }

  return (
    <div className="partenq">
      <div className="partenq_title">Chosen Vehicle Details</div>
      <div className="partenq_form">
        <select
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}>
          <option value="" disabled>Select parts</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <button className='partenq_btn' onClick={addTodo}>Add</button>
      </div>
      {/* <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul> */}
    </div>
  );
}
export default PartEnquiry;