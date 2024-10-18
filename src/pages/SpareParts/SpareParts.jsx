import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './SpareParts.css';

const SpareParts = () => {
  return (
    <>
      <Navbar />
      <div className="spare_parts">
        <div className="spare_parts_title">Spare Parts</div>
        <div className="spare_parts_para"></div>
        <div className="spare_parts_head"></div>
        <div className="spare_parts_para"></div>
        <div className="spare_parts_head"></div>
        <div className="spare_parts_para"></div>
      </div>
      <Footer />
    </>
  );
};

export default SpareParts;
