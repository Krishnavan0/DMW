import React from 'react';
import Base from "../../components/Base/Base";
import CarDet from '../../components/Card/CarDet/CarDet';
// import PartEnquiry from '../../components/Card/PartEnquiry/PartEnquiry';
import "./enquiry.css";

const Enquiry = () => {
  return (
    <>
      <Base>
        <div className="enquiry">
          <CarDet />
        </div>
      </Base>
    </>
  )
}

export default Enquiry;
