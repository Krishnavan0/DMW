import React from 'react';
import Base from "../../components/Base/Base";
import { useParams } from "react-router-dom";
import CarDet from '../../components/Card/CarDet/CarDet';
// import PartEnquiry from '../../components/Card/PartEnquiry/PartEnquiry';
import "./enquiry.css";

const Enquiry = () => {
  const { company } = useParams();
  const { model } = useParams();
  const { year } = useParams();
  console.log(company);
  console.log(model);
  console.log(year);

  return (
    <>
      <Base>
        <div className="enquiry">
          <CarDet company={company} model={model} year={year} />
        </div>
      </Base>
    </>
  )
}

export default Enquiry;
