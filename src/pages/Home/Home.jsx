import React, { useState } from "react";
import KeyBenefits from '../../components/Card/KeyBenefits/KeyBenefits';
import Company from '../../components/Card/Company/Company';
import Principle from '../../components/Card/Principle/Principle';
import Features from '../../components/Card/Features/Features';
import Filter from '../../components/Filter/Filter';
import FilterSearch from '../../components/FilterSearch/FilterSearch';
import Base from "../../components/Base/Base";

const Home = () => {
  const [modal, setModal] = useState(false);

  const closeModal = () => setModal(false);

  return (
    <div className="home">
      <Base>
        <Filter />
        <KeyBenefits />
        <Company />
        <Principle />
        <Features />
      </Base>
      {modal && <FilterSearch closeModal={closeModal} />}
    </div>
  );
};

export default Home;
