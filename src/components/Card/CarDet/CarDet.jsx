import React, { useState } from 'react';
import './CarDet.css';
import '../PartEnquiry/PartEnquiry.css';
import PartEnquiry from '../PartEnquiry/PartEnquiry';
import BuyerSignUp from '../BuyerSignUp/BuyerSignUp';

const CarDet = () => {
  const [parts, setParts] = useState([]);
  const [todos, setTodos] = useState([]);
  const [select, setSelect] = useState(false);

  const deletePart = (index) => {
    const updatedParts = parts.filter((_, i) => i !== index);
    const updatedTodos = todos.filter((_, i) => i !== index); // Delete corresponding todo
    setParts(updatedParts);
    setTodos(updatedTodos); // Update todos state
  };

  // console.log('CarDetselect', select);
  // console.log('CarDetsetSelect', setSelect);

  return (
    <>
      {select ? (<BuyerSignUp setSelect={setSelect}/>) :
        (<PartEnquiry parts={parts} setParts={setParts} setTodos={setTodos} setSelect={setSelect} />)
      }
      <div className="cardet">
        <div className="cardet_title">Chosen Vehicle Details</div>
        <div className="cardet_details">
          <div className="cardet_head">Vehicle Information</div>
          <div className="cardet_item"><strong>Company:</strong> Datsun</div>
          <div className="cardet_item"><strong>Model:</strong> GO</div>
          <div className="cardet_item"><strong>Year:</strong> 2018</div>
        </div>
        <div className="cardet_part">
          <div className="cardet_part_head">Selected Part</div>
          {parts.length > 0 ? (
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
  );
}

export default CarDet;