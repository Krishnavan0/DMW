import React from 'react'
import './Features.css';
import { useNavigate } from 'react-router-dom';

const features_data = [
  { id: 1, name: "Brake", img: "https://www.selectusedparts.com/assets/images/category-image/1652161342-Body-Parts-,-Exhaust,-Exterior-Fittings.png" },
  { id: 2, name: "MudGaurd", img: "https://www.selectusedparts.com/assets/images/category-image/1652161342-Body-Parts-,-Exhaust,-Exterior-Fittings.png" },
  { id: 3, name: "Brake Disc", img: "https://www.selectusedparts.com/assets/images/category-image/1652161342-Body-Parts-,-Exhaust,-Exterior-Fittings.png" },
  { id: 4, name: "Brake Shole", img: "https://www.selectusedparts.com/assets/images/category-image/1652161342-Body-Parts-,-Exhaust,-Exterior-Fittings.png" },
  { id: 5, name: "Brake Drum", img: "https://www.selectusedparts.com/assets/images/category-image/1652161342-Body-Parts-,-Exhaust,-Exterior-Fittings.png" },
 
]

const Features = () => {
  const navigate = useNavigate();

  return (
    <div className='features'>
      <div className="features_heading">features categories</div>
      <div className="features_parag">Share your thoughts on the future growth of raroin.</div>
      <div className="features_items">
        {features_data.map((item) => {
          // console.log(item)
          return (
            <div className="features_box" key={item.id} onClick={()=>{
              console.log(item.id);
              navigate("/parts");
            }}>
              <img className="features_img" src={item.img} />
              <div className="features_name">{item.name}</div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Features;
