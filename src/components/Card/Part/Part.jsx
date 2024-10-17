import React from 'react'
import './Part.css';


const part_data = [
  { id: 1, name: "Brake", img: "https://www.selectusedparts.com/assets/images/category-image/1652161342-Body-Parts-,-Exhaust,-Exterior-Fittings.png" },
  { id: 2, name: "MudGaurd", img: "https://www.selectusedparts.com/assets/images/category-image/1652161342-Body-Parts-,-Exhaust,-Exterior-Fittings.png" },
  { id: 3, name: "Brake Disc", img: "https://www.selectusedparts.com/assets/images/category-image/1652161342-Body-Parts-,-Exhaust,-Exterior-Fittings.png" },
  { id: 4, name: "Brake Shole", img: "https://www.selectusedparts.com/assets/images/category-image/1652161342-Body-Parts-,-Exhaust,-Exterior-Fittings.png" },
  { id: 5, name: "Brake Drum", img: "https://www.selectusedparts.com/assets/images/category-image/1652161342-Body-Parts-,-Exhaust,-Exterior-Fittings.png" },
]

const Part = () => {

  return (
    <>
      <div className='part'>
        <div className="part_heading">parts</div>
        <div className="part_parag">Find your spare here</div>
        <div className="part_items">
          {part_data.map((item) => {
            // console.log(item)
            return (
              <div className="part_box" key={item.id} onClick={() => {
                console.log('part', item.id)
              }}>
                <img className="part_img" src={item.img} />
                <div className="part_name">{item.name}</div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Part