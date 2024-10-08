import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import "./SellerSignIn.css";
import { useNavigate, NavLink } from "react-router-dom";
import Button from '../../components/Button/Button';



const SellerSignIn = () => {
  const navigate = useNavigate();

  const defaultValue = {
    email: "",
    password: "",
  };

  let onlyEmail = new RegExp("[a-z0-9]+@[a-z]+.com");
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .nullable()
      .email("Email is invalid")
      .matches(onlyEmail, "Your Email looks like johndoe@gmail.com")
      .required("Email is required!"),
    password: yup
      .string()
      .nullable()
      .trim()
      .required("Password is required!")
      .min(8, "Password must be at least 8 characters")
      .max(20, "Password must be at most 20 characters"),
  });

  const handleSubmit = (values, action) => {
    console.log('SignIn', values)
  };
  return (
    <>
      <div className="signin">
        <div className="signin_box">
          
            <div className="signin_name">
              <NavLink to="/">DMW</NavLink>
            </div>
          
          <div className="signin_parah2">Parts Supplier Login Only</div>
          <div className="signin_para">Welcome Back</div>
          <Formik
            initialValues={defaultValue}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form action="" className="signin-form">
              <div className="signin-email">
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="username"
                />
                <ErrorMessage name="email" />
              </div>
              <div className="signin-email">
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <ErrorMessage name="password" />
              </div>
              <div className="signin-forget">
                <NavLink to="/forgotpass">Forgot Your Password?</NavLink>
              </div>
              <div className="signin-btn">
                <Button
                  text="Sign In"
                  type="submit"
                  fontSize="1.6rem"
                  width="100%"
                />
              </div>
            </Form>
          </Formik>
          <div className="signin_account">
            <p>Don't have an account?</p>
            <div className="signin_link">
              <NavLink to="/signup">Sign Up</NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerSignIn;
