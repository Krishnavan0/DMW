import React from 'react'
import "./ForgotPass.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useNavigate, NavLink } from "react-router-dom";
import Button from "../../components/Button/Button";

const ForgotPass = () => {
  const navigate = useNavigate();
  const defaultValue = {
    email: "",
  };

  let onlyEmail = new RegExp("[a-z0-9]+@[a-z]+.com");
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .nullable()
      .email("Email is invalid")
      .required("Email is required!")
      .matches(onlyEmail, "Your Email looks like johndoe@gmail.com"),
  });

  const submitForm = (values) => {
    console.log(values)
    navigate(`/changepass/${values.email}`);
  }
  return (
    <>
      <div className="forgot">
        <div className="forgot_box">
          <div className="forgot_logo">
            <NavLink to="/">
              <div className="forgot_name">DMW</div>
            </NavLink>
          </div>
          <div className="forgot_para">Forgot Password</div>
          <Formik
            initialValues={defaultValue}
            validationSchema={validationSchema}
            onSubmit={submitForm}
          >
            <Form action="">
              <div className="forgot_email">
                <Field
                  type="email"
                  name="email"
                  placeholder="Email ID"
                  autoComplete="username"
                />
                <ErrorMessage name="email" />
              </div>
              <div className="forgot_btn">
                <Button
                  text="Submit"
                  type="submit"
                  fontSize="1.6rem"
                  width="11.4rem"
                  height="4rem"
                />
                <Button
                  text="Cancel"
                  type="submit"
                  fontSize="1.6rem"
                  height="4rem"
                  width="11.4rem"
                  background="#fff"
                  border="0.1rem solid #27AE60"
                  color='#000'
                  event={() => {
                    navigate("/signin");
                  }}
                />
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  )
}

export default ForgotPass;
