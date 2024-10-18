import React, { useState } from "react";
import KeyBenefits from '../../components/Card/KeyBenefits/KeyBenefits';
import Company from '../../components/Card/Company/Company';
import Principle from '../../components/Card/Principle/Principle';
import Features from '../../components/Card/Features/Features';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Filter from '../../components/Filter/Filter';
import FilterSearch from '../../components/FilterSearch/FilterSearch';

const Home = () => {
  const [modal, setModal] = useState(false);

  const closeModal = () => setModal(false);

  return (
    <div className="home">
      <Navbar />
      <KeyBenefits />
      <Company />
      <Principle />
      <Features />
      <Footer />
      {modal && <FilterSearch closeModal={closeModal} />}
    </div>
  );
};

export default Home;
