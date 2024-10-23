import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import './BuyerSignUp.css';
import Button from '../../Button/Button';
import { useNavigate } from "react-router-dom";

const BuyerSignUp = ({ setSelect }) => {
  const navigate = useNavigate();
  const defaultValue = {
    name: "",
    email: "",
    phone: "",
    address: "",
    state: "",
    pin: "",
    country: ""
  };

  const onlyText = /^[a-zA-Z ]*$/;
  let onlyEmail = new RegExp("[a-z0-9]+@[a-z]+.com");

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .matches(onlyText, "Name must be text")
      .nullable()
      .required("Name is required!")
      .max(30),
    email: yup
      .string()
      .nullable()
      .email("Email is invalid")
      .matches(onlyEmail, "Your Email looks like johndoe@gmail.com")
      .required("Email is required!"),
    phone: yup
      .string(),
    address: yup
      .string(),
    state: yup
      .string(),
    pin: yup
      .string(),
    country: yup
      .string(),
  })

  const submitForm = (values) => {
    console.log('Seller Registration', values)
    navigate('/bussdet')
  };


  return (
    <>
      <div className="buyersignup">
        <div className="buyersignup_title">Personal Details</div>
        <Formik
          initialValues={defaultValue}
          validationSchema={validationSchema}
          onSubmit={submitForm}
        >
          <Form action="" className="buyersignup_form">
            <div className="buyersignup_email">
              <Field
                type="text"
                name="name"
                placeholder="Name"
                autoComplete="username"
              />
              <ErrorMessage name="name" />
            </div>
            <div className="buyersignup_email">
              <Field
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="username"
              />
              <ErrorMessage name="email" />
            </div>
            <div className="buyersignup_email">
              <Field
                type="tel"
                name="phone"
                placeholder="Phone"
                autoComplete="tel"
              />
              <ErrorMessage name="phone" />
            </div>
            <div className="buyersignup_email">
              <Field
                type="text"
                name="address"
                placeholder="Address"
              />
              <ErrorMessage name="address" />
            </div>
            <div className="buyersignup_email">
              <Field
                type="text"
                name="pincode"
                placeholder="Postal code"
              />
              <ErrorMessage name="pincode" />
            </div>
            <div className="buyersignup_email">
              <Field
                type="text"
                name="country"
                placeholder="Country"
              />
              <ErrorMessage name="country" />
            </div>
            <div className="buyersignup_email">
              <Field
                type="text"
                name="state"
                placeholder="State"
              />
              <ErrorMessage name="state" />
            </div>
            <div className="buyersignup_email">
              <Field
                type="text"
                name="city"
                placeholder="City"
              />
              <ErrorMessage name="city" />
            </div>
            <div className="signup_btn">
              <Button
                text="Sign Up"
                type="submit"
                fontSize="1.6rem"
                width="100%"
                borderRadius="1rem"
              />
            </div>
          </Form>
        </Formik>
        <div className="buyersignup_btns">
        <button className="buyersignup_btn1" onClick={() => {
          setSelect(false)
        }}>Back</button>
        <button className="buyersignup_btn1" onClick={() => {
          navigate('/order')
        }}>Save</button>
        </div>
      </div>
    </>
  );
};

export default BuyerSignUp;
