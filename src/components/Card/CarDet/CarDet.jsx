import React from 'react'
import './CarDet.css'

const CarDet = () => {
  return (
    <>
      <div className="cardet">
        <div className="cardet_title">Choosen Vehicle Details</div>
        <div className="cardet_details">
          <div className="cardet_head">Vehicle Information</div>
          <div className="cardet_item"><strong>Company:</strong> Datsun</div>
          <div className="cardet_item"><strong>Model:</strong> GO</div>
          <div className="cardet_item"><strong>Year:</strong> 2018</div>
        </div>
        <div class="cardet_part">
          <div className="cardet_part_head">Selected Part</div>
          <div className="cardet_part_item"><strong>Part Name:</strong> Brake Disc</div>
        </div>
      </div>
    </>
  )
}

export default CarDet
