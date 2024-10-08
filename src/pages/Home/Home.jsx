import React from 'react';
import KeyBenefits from '../../components/Card/KeyBenefits/KeyBenefits';
import Company from '../../components/Card/Company/Company';
import Principle from '../../components/Card/Princple/Principle';
import Features from '../../components/Card/Features/Features';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <KeyBenefits />
      <Company />
      <Principle />
      <Features />
      <NavLink to="/signup">Sign Up</NavLink>
      <NavLink to="/signin">Sign In</NavLink>
    </div>
  );
};

export default Home;
