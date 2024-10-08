import React from 'react';
// import {key_benefits} from '../../../data/key_benefits';
import './KeyBenefits.css'

const KeyBenefits = () => {
  const key_benefits = [
    { id: 1, name: "Warranty", description: "offers a limited warranty on all items sold!" },
    { id: 2, name: "Easy Returns", description: "Ordered the wrong part? Enjoy peace of mind with easy returns!" },
    { id: 3, name: "Security", description: "We always take care of our partners, repairer workshops. Your data is always safe with us!" },
    { id: 4, name: "Fast Delivery", description: "Get the parts you need when you need them at ur door step!" },
    { id: 5, name: "Reliability", description: "is a reliable partner in sourcing quality used OEM parts!" },
    { id: 6, name: "Competitive Prices", description: "We have quality used parts available at the most competitive prices!" },
    { id: 7, name: "Easy Selling", description: "We handle all payment and customer support!" },
    { id: 8, name: "Reach More Customers", description: "  " },
  ]
  return (
    <div className="benefits">
      <div className="benefits_heading">Core Advantages</div>
      <div className="benefits_parag">Experience a whole new way to buy parts with our innovative benefits! Order with confidence, knowing you’re getting quality, reliability, and support every step of the way.</div>
      <div className="benefits_items">

        {key_benefits.map((item) => {
          return (
            <div className="benefits_box" key={item.id}>
              <img className="benefits_img" src='https://img.icons8.com/?size=100&id=12666&format=png&color=000000' />
              <div className="benefits_txt">
                <div className="benefits_text">{item.name}</div>
                <div className="benefits_para">{item.description}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
    // </div>
  );
};

export default KeyBenefits;
