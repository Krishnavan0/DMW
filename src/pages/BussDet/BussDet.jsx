import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import "./BussDet.css";
import { useNavigate, NavLink } from "react-router-dom";
import Button from '../../components/Button/Button';

const BussDet = () => {
  const navigate = useNavigate();

  const defaultValue = {
    bussname: "",
    address: "",
    pincode: "",
    country: "",
    state: "",
    city: "",
    panno: "",
    panimg: "",
    gstno: "",
    gstimg: "",
    loc: "",
  };

  const validationSchema = yup.object().shape({

  })

  const submitForm = (values, action) => {
    console.log('Bussiness Details', values)
  };

  return (
    <>
      <div className="bussdet">
        <div className="bussdet_box">
          <div className="bussdet_logo">
            <NavLink to="/">
              <div className="bussdet_name">DMW</div>
            </NavLink>
          </div>
          <div className="bussdet_parah2">Bussiness Details</div>
          <Formik
            initialValues={defaultValue}
            validationSchema={validationSchema}
            onSubmit={submitForm}
          >
            <Form action="" className="bussdet_form">
              <div className="bussdet_email">
                <Field
                  type="text"
                  name="bussname"
                  placeholder="Bussiness Name"
                />
                <ErrorMessage name="bussname" />
              </div>
              <div className="bussdet_email">
                <Field
                  type="text"
                  name="address"
                  placeholder="Address"
                />
                <ErrorMessage name="address" />
              </div>
              <div className="bussdet_email">
                <Field
                  type="text"
                  name="pincode"
                  placeholder="Postal code"
                />
                <ErrorMessage name="pincode" />
              </div>
              <div className="bussdet_email">
                <Field
                  type="text"
                  name="country"
                  placeholder="Country"
                />
                <ErrorMessage name="country" />
              </div>
              <div className="bussdet_email">
                <Field
                  type="text"
                  name="state"
                  placeholder="State"
                />
                <ErrorMessage name="state" />
              </div>
              <div className="bussdet_email">
                <Field
                  type="text"
                  name="city"
                  placeholder="City"
                />
                <ErrorMessage name="city" />
              </div>
              <div className="bussdet_email">
                <Field
                  type="text"
                  name="panno"
                  placeholder="PAN No."
                />
                <ErrorMessage name="panno" />
              </div>
              <div className="bussdet_email">
                <Field
                  type="file"
                  name="panimg"
                  placeholder="PAN Image"
                />
                <ErrorMessage name="panimg" />
              </div>
              <div className="bussdet_email">
                <Field
                  type="text"
                  name="gstno"
                  placeholder="GST No."
                />
                <ErrorMessage name="gstno" />
              </div>
              <div className="bussdet_email">
                <Field
                  type="file"
                  name="gstimg"
                  placeholder="GST Image"
                />
                <ErrorMessage name="gstimg" />
              </div>
              <div className="bussdet_email">
                <Field
                  type="text"
                  name="loc"
                  placeholder="Location"
                />
                <ErrorMessage name="loc" />
              </div>
              <div className="bussdet_btn">
                <Button
                  text="Save"
                  type="submit"
                  fontSize="1.6rem"
                  width="29.8rem"
                  borderRadius="1rem"
                />
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  )
}

export default BussDet
