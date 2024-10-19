import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Base.css';

const Base = ({ children }) => {
  return (
    <div>
      <Navbar />
      <section className='contain'>{children}</section>
      <Footer />
    </div>
  );
};

export default Base;