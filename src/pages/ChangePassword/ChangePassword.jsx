import React, { useState, useEffect } from "react";
import "./ChangePassword.css";
import * as yup from "yup";
import { useNavigate, useParams, NavLink } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "../../components/Button/Button";


const ChangePassword = () => {
  const navigate = useNavigate();
  const { emailID } = useParams();
  const [timeleft, setTimeleft] = useState(29);

  const defaultValue = {
    code: "",
    pin: "",
  };

  const onlyNum = /^[0-9 ]*$/;
  const validationSchema = yup.object().shape({
    pin: yup
      .string()
      .nullable()
      .trim()
      .min(8, "Password must be at least 8 characters")
      .max(20, "Password must be at most 20 characters")
      .required("Password is required!"),
    code: yup
      .string()
      .matches(onlyNum, "Code must be digit")
      .nullable()
      .length(4)
      .required("Please Enter your Verification code"),
  });

  useEffect(() => {
    let timeCount = setInterval(() => {
      if (timeleft > 0) {
        setTimeleft(timeleft - 1);
      }
    }, 1000);
    return () => clearInterval(timeCount);
  }, [timeleft]);

  const submitForm = (values, action) => {
    console.log(values);
  }

  return (
    <>
      <div className="change">
        <div className="change_box">
          <div className="change_logo">
            <NavLink to="/">
              <div className="change_name">DMW</div>
            </NavLink>
          </div>
          <div className="change_para">Change Password</div>
          <Formik
            initialValues={defaultValue}
            validationSchema={validationSchema}
            onSubmit={submitForm}
          >
            <Form action="">
              <div className="change_email">
                <Field
                  type="text"
                  name="code"
                  placeholder="Enter verification code"
                  autoComplete="username"
                />
                <ErrorMessage name="code" />
              </div>
              <div className="change_email">
                <Field
                  type="password"
                  name="pin"
                  placeholder="New Password"
                  autoComplete="username"
                />
                <ErrorMessage name="pin" />
              </div>
              <div className="change_btn">
                <Button
                  text="Submit"
                  type="submit"
                  fontSize="1.6rem"
                  width="11.4rem"
                  borderRadius="0.5rem"
                  fontFamily="Inter"
                  height="4.2rem"
                />
                <Button
                  text="Cancel"
                  type="submit"
                  height="4.2rem"
                  fontSize="1.6rem"
                  fontFamily="Inter"
                  width="11.4rem"
                  borderRadius="0.5rem"
                  background="#fff"
                  border="0.1rem solid #27AE60"
                  color='#000'
                  event={() => {
                    navigate("/forgotpass");
                  }}
                />
              </div>
            </Form>
          </Formik>
          {/* <div className="change_resend">
            {timeleft > 0 ? (
              <div className="resend_click">
                Resend OTP in {timeleft} Seconds
              </div>
            ) : (
              <div onClick={resetOtp}>
                <div className="clickResend">Resend</div>
              </div>
            )}
            </div> */}
        </div>
      </div>
    </>
  )
}

export default ChangePassword
