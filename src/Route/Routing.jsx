import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import BussDet from "../pages/BussDet/BussDet";
import SellerSignIn from "../pages/SellerSignIn/SellerSignIn";
import SellerSignUp from "../pages/SellerSignUp/SellerSignUp";
import ForgotPass from "../pages/ForgotPass/ForgotPass";
import ChangePassword from "../pages/ChangePassword/ChangePassword";
import OTP from "../pages/OTP/OTP";
// import Pay from "../pages/Pay/Pay";
// import Part from "../pages/Part/Part";
// import Cart from "../pages/Cart/Cart";
// import Review from "../pages/Review/Review";
// import Address from "../pages/Address/Address";
// import ProdPage from "../pages/ProdPage/ProdPage";
// import ProdList from "../pages/ProdList/ProdList";
// import ProdType from "../pages/ProdType/ProdType";
// import ForgotPass from "../pages/ForgotPass/ForgotPass";
// import Category from "../pages/Category/Category";

function Routings() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<SellerSignUp />} />
      <Route path="/signin" element={<SellerSignIn />} />
      <Route path="/forgotpass" element={<ForgotPass />} />
      <Route path="/signin" element={<SellerSignIn />} />
      <Route path="/bussdet" element={<BussDet />} />
      <Route path="/otp" element={<OTP />} />
      <Route path="/changepass/:emailID" element={<ChangePassword />} />
    </Routes>
  );
}

export default Routings;
