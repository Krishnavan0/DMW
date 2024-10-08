import React from "react";
import { Routes, Route } from "react-router-dom";
// import OTP from "../pages/OTP/OTP";
// import Pay from "../pages/Pay/Pay";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
// import Part from "../pages/Part/Part";
// import Cart from "../pages/Cart/Cart";
import SellerSignUp from "../pages/SellerSignUp/SellerSignUp";
import SellerSignIn from "../pages/SellerSignIn/SellerSignIn";
import BussDet from "../pages/BussDet/BussDet";
// import Review from "../pages/Review/Review";
// import Address from "../pages/Address/Address";
// import ProdPage from "../pages/ProdPage/ProdPage";
// import ProdList from "../pages/ProdList/ProdList";
// import ProdType from "../pages/ProdType/ProdType";
// import ForgotPass from "../pages/ForgotPass/ForgotPass";
// import Category from "../pages/Category/Category";
// import ChangePassword from "../pages/ChangePassword/ChangePassword";

const Routings = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<SellerSignUp />} />
      <Route path="/signin" element={<SellerSignIn />} />
      <Route path="/bussdet" element={<BussDet />} />
    </Routes>
  );
};

export default Routings;
