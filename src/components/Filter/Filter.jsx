import React from 'react';
import './filter.css';
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import Button from "../../components/Button/Button";

const Filter = () => {
  const defaultValue = {
    company: "Select Car Company",
    model: "Select Car Model",
    year: "Select Year",
  };

  const validationSchema = yup.object().shape({
    company: yup.string().required("Please enter your full name"),
    model: yup.string().required("Please enter your full name"),
    year: yup.string().required("Please enter your full name"),
  });

  const submitForm = (values) => {
    console.log('values', values);
  };

  return (
    <div className="filter">
      <Formik
        initialValues={defaultValue}
        validationSchema={validationSchema}
        onSubmit={submitForm}
      >
        <Form action="">
          <div className="filter_items">
            <div className="filter_item">
              {/* <Field type="text" name="company" placeholder="Select Car Company" /> */}
              <Field as="select" name="company">
                <option disabled>Select Car Company</option>
                <option value="maruti">Maruti</option>
                <option value="hyundai">Hyundai</option>
                <option value="mahindra">Mahindra</option>
                <option value="toyota">Toyota</option>
              </Field>
            </div>
            <div className="filter_item">
              {/* <Field type="text" name="model" placeholder="Select Car Model" /> */}
              <Field as="select" name="model">
                <option disabled>Select Car Model</option>
                <option value="beat">Beat</option>
                <option value="sail">Sail</option>
              </Field>
            </div>
            <div className="filter_item">
              {/* <Field type="text" name="year" placeholder="Select Year" /> */}
              <Field as="select" name="year">
                <option disabled>Select Year</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
              </Field>
            </div>
            <div className="filter_btn">
              <Button
                width='6.9rem'
                height='4.6rem'
                type="submit"
                text="Search"
                fontFamily="Inter"
                fontSize="1.5rem"
                fontWeight="400"
              />
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default Filter;
