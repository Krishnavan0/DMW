import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import "./SellerSignUp.css";
import { useNavigate, NavLink } from "react-router-dom";
import Button from '../../components/Button/Button';

const SignUp = () => {
  const navigate = useNavigate();

  const defaultValue = {
    profile: "",
    name: "",
    username: "",
    email: "",
    phone: "",
    alterphone: "",
    pass: "",
    passconf: ""
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
    pass: yup
      .string()
      .nullable()
      .trim()
      .required("Password is required!")
      .min(8, "Password must be at least 8 characters")
      .max(20, "Password must be at most 20 characters"),
    passconf: yup
      .string(),
    alterphone: yup
      .string(),
    phone: yup
      .string(),
    profile: yup
      .string(),
  });

  const submitForm = (values, action) => {
    console.log('Seller Registration', values)
    navigate('/bussdet')
  };

  return (
    <>
      <div className="signup">
        <div className="signup_container">
          <div className="signup_box">
            <div className="signup_logo">
              <NavLink to="/">
                <div className="signup_name">DMW</div>
              </NavLink>
            </div>
            <div className="signup_parah2">Wants to Register as a Part Provider?</div>
            <div className="signup_para">Create you account here</div>
            <Formik
              initialValues={defaultValue}
              validationSchema={validationSchema}
              onSubmit={submitForm}
            >
              <Form action="" className="signup_form">
                <div className="signup_email">
                  <Field
                    type="file"
                    name="profile"
                    placeholder="Profile Picture"
                  />
                  <ErrorMessage name="profile" />
                </div>
                <div className="signup_email">
                  <Field
                    type="text"
                    name="name"
                    placeholder="Name"
                    autoComplete="username"
                  />
                  <ErrorMessage name="name" />
                </div>
                <div className="signup_email">
                  <Field
                    type="text"
                    name="username"
                    placeholder="Username"
                    autoComplete="username"
                  />
                  <ErrorMessage name="username" />
                </div>
                <div className="signup_email">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    autoComplete="username"
                  />
                  <ErrorMessage name="email" />
                </div>
                <div className="signup_email">
                  <Field
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    autoComplete="tel"
                  />
                  <ErrorMessage name="phone" />
                </div>
                <div className="signup_email">
                  <Field
                    type="tel"
                    name="alterphone"
                    placeholder="Alternative Phone"
                    autoComplete="tel"
                  />
                  <ErrorMessage name="alterphone" />
                </div>
                <div className="signup_email">
                  <Field
                    type="password"
                    name="pass"
                    placeholder="Password"
                    autoComplete="current-password"
                  />
                  <ErrorMessage name="pass" />
                </div>
                <div className="signup_email">
                  <Field
                    type="password"
                    name="passconf"
                    placeholder="Confirm Password"
                    autoComplete="current-password"
                  />
                  <ErrorMessage name="password" />
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
            <div className="signup_account">
              <p>Already have an account?</p>
              <div className="signup_link">
                <NavLink to="/signin">Sign In</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp
