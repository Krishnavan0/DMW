import React from "react";
import { Routes, Route } from "react-router-dom";

import OTP from "../pages/OTP/OTP";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Parts from "../pages/Parts/Parts";
import Terms from "../pages/Terms/Terms";
import Policy from "../pages/Policy/Policy";
import BussDet from "../pages/BussDet/BussDet";
import Contact from "../pages/Contact/Contact";
import Enquiry from "../pages/Enquiry/Enquiry";
import ForgotPass from "../pages/ForgotPass/ForgotPass";
import ChangePass from "../pages/ChangePass/ChangePass";
import SpareParts from "../pages/SpareParts/SpareParts";
import SellerSignIn from "../pages/SellerSignIn/SellerSignIn";
import SellerSignUp from "../pages/SellerSignUp/SellerSignUp";


function Routings() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/otp" element={<OTP />} />
      <Route path="/parts" element={<Parts />} />
      <Route path="/about" element={<About />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/bussdet" element={<BussDet />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/enquiry" element={<Enquiry />} />
      <Route path="/spare" element={<SpareParts />} />
      <Route path="/signup" element={<SellerSignUp />} />
      <Route path="/signin" element={<SellerSignIn />} />
      <Route path="/signin" element={<SellerSignIn />} />
      <Route path="/forgotpass" element={<ForgotPass />} />
      <Route path="/changepass/:emailID" element={<ChangePass />} />
    </Routes>
  );
}

export default Routings;
