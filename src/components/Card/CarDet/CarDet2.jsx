import React, { useState } from 'react';
import './CarDet.css';
import '../PartEnquiry/PartEnquiry.css';

const CarDet = () => {
  const [parts, setParts] = useState('')

  const deletePart = (index) => {
    const updatedPart = parts.filter((_, i) => i !== index);
    setParts(updatedPart);
    todos(updatedPart)
  };
  return (
    <>
      <PartEnquiry parts={parts} setParts={setParts} deletePart={deletePart} />
      <div className="cardet">
        <div className="cardet_title">Choosen Vehicle Details</div>
        <div className="cardet_details">
          <div className="cardet_head">Vehicle Information</div>
          <div className="cardet_item"><strong>Company:</strong> Datsun</div>
          <div className="cardet_item"><strong>Model:</strong> GO</div>
          <div className="cardet_item"><strong>Year:</strong> 2018</div>
        </div>
        <div className="cardet_part">
          <div className="cardet_part_head">Selected Part</div>
          {parts ? (
            <ul className="cardet_part_ul">
              {parts.map((item, index) => (
                <li className="cardet_part_item" key={index} onClick={() => deletePart(index)}>
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </>
  )
}

const PartEnquiry = ({ parts, setParts, deletePart }) => {
  const [todos, setTodos] = useState([]);
  const [newTodoText, setNewTodoText] = useState('');
  console.log('PartEnquiry', todos.id)
  console.log('PartEnquiry', parts)

  const addTodo = () => {
    if (!newTodoText) {
      alert('Please select an option before adding.');
      return;
    }
    setTodos([...todos, newTodoText]);
    setParts([...todos, newTodoText]);
    setNewTodoText(''); // Clear input field after adding
  }

  return (
    <div className="partenq">
      <div className="partenq_title">Choosen Vehicle Details</div>
      <div className="partenq_form">
        <select
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}>
          <option value="" disabled>Select parts</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <button className='partenq_btn' onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo} </li>
        ))}
      </ul>
    </div>
  );
}

export default CarDet
