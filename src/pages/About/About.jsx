import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Base from "../../components/Base/Base";
import './about.css';

const About = () => {

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return (
    <>
    <Base>
      <div className="about">
        <div className="about_title">About</div>
        <div className="about_para">
        Welcome to DMW Durgapur Machine Works, your trusted partner in connecting spare parts providers with users in the industrial sector. At DMW, we understand the vital role that quality spare parts play in maintaining operational efficiency. Our mission is to facilitate seamless connections between manufacturers and users, ensuring that you have access to the parts you need, when you need them.
        </div>
        <div className="about_para">
        While we do not sell spare parts directly, our extensive network and industry expertise enable us to guide you in finding the right solutions for your machinery needs. Our friendly and knowledgeable team is dedicated to providing exceptional support, helping you navigate the complexities of spare parts sourcing with ease.
        </div>
        <div className="about_para">
        At DMW, we pride ourselves on fostering strong relationships within the industry. We are committed to transparency, reliability, and professionalism, ensuring that our clients receive the highest level of service. Whether you are a small business or a large corporation, we are here to help you optimize your operations and keep your machinery running smoothly.
        </div>
        <div className="about_para">
        Thank you for choosing DMW Durgapur Machine Works as your connection to quality spare parts. We look forward to working with you!
        </div>
      </div>
      </Base>
    </>
  )
}

export default About
