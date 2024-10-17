import React from 'react';
import KeyBenefits from '../../components/Card/KeyBenefits/KeyBenefits';
import Company from '../../components/Card/Company/Company';
import Principle from '../../components/Card/Princple/Principle';
import Features from '../../components/Card/Features/Features';
import { NavLink } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <KeyBenefits />
      <Company />
      <Principle />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
