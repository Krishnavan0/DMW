import React, { useEffect } from "react";
import "./OTP.css";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "../../components/Button/Button";

const OTP = () => {
  const navigate = useNavigate();

  const defaultValue = {
    otp: "",
  };

  const onlyNum = /^[0-9 ]*$/;
  const validationSchema = yup.object().shape({
    otp: yup
      .string()
      .matches(onlyNum, "Code must be digit")
      .nullable()
      .length(4)
      .required("Please Enter your OTP"),
  });

  const submitForm = (values, action) => {
    console.log("OTP", values);
    navigate('/')
    // const name = signUpData.data.name?.split(" ");
    // const data = {
    //   email: signUpData.data.email,
    //   password: signUpData.data.password,
    //   user_type: "user",
    //   otp: values.otp,
    //   profile: {
    //     first_name: name[0],
    //     middle_name: name.length > 2 ? name[2] : "",
    //     last_name: name.length > 2 ? name[3] : name[2],
    //   },
    //   address: {
    //     address_line1: "",
    //     address_line2: "",
    //     city: "",
    //     state: "",
    //     country: "",
    //     pin: "",
    //     latitude: "",
    //     longitude: "",
    //   },
    // };
    // dispatch(register(data));
    // action.resetForm();
  };

  // useEffect(() => {
  //   let timeCount = setInterval(() => {
  //     if (timeleft > 0) {
  //       setTimeleft(timeleft - 1);
  //     }
  //   }, 1000);
  //   return () => clearInterval(timeCount);
  // }, [timeleft]);

  // useEffect(() => {
  //   // console.log(signUpData);
  //   if (signUpData.status === STATUSES.SUCCESS) {
  //     resetSignupState();
  //     // console.log(signUpData);
  //     if (signUpData?.data !== undefined) {
  //       navigate("/signin");
  //       // console.log(signUpData);
  //     }
  //   }
  //   if (signUpData.status === STATUSES.ERROR) {
  //     // console.log(signUpData);
  //     resetSignupState();
  //   }
  // }, [signUpData]);

  // const resetOtp = () => {
  //   console.log("Hallo");
  //   let email = "";
  //   if (used_for != "fp") {
  //     email: signUpData.data.email;
  //   } else {
  //     email: signUpData.data.email;
  //   }
  //   otp(signUpData.data.email, used_for)
  //     .then((response) => {
  //       console.log(response.data["message"]);
  //     })
  //     .catch((error) => {
  //        console.log('error---------', error.response.data);
  //       if (error.response.data) {
  //         console.log(error.response.data[0]);
  //       } else {
  //         console.log(Object.values(error.response.data)[0][0]);
  //       }
  //     });
  // };

  return (
    <>
      <div className="otp">
        <div className="otp_box">
          <div className="otp_logo">
            <div className="otp_name">DMW</div>
          </div>
          <div className="otp_para">OTP</div>
          <Formik
            initialValues={defaultValue}
            validationSchema={validationSchema}
            onSubmit={submitForm}
          >
            <Form action="">
              <div className="otp-email">
                <Field
                  type="text"
                  name="otp"
                  placeholder="Enter your OTP"
                  autoComplete="username"
                />
                <ErrorMessage name="otp" />
              </div>
              <div className="otp-btn">
                <Button
                  text="Verify"
                  type="submit"
                  fontSize="1.6rem"
                  width="11.4rem"
                  borderRadius="0.5rem"
                  height="4.2rem"
                />
                <Button
                  text="Cancel"
                  type="submit"
                  fontSize="1.6rem"
                  height="4.2rem"
                  width="11.4rem"
                  borderRadius="0.5rem"
                  background="#fff"
                  border="0.1rem solid #27AE60"
                  color='#000'
                  event={() => {
                    navigate("/signup");
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

export default OTP
