import React from 'react';
import './filter.css';
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import Button from "../../components/Button/Button";
import { useNavigate } from 'react-router-dom';

const Filter = () => {
  const navigate = useNavigate();
  const defaultValue = {
    company: "",
    model: "",
    year: "",
  };

  const validationSchema = yup.object().shape({
    company: yup.string().required("Please enter your full name"),
    model: yup.string().required("Please enter your full name"),
    year: yup.string().required("Please enter your full name"),
  });

  const submitForm = (values) => {
    console.log('values', values);

    navigate(`/enquiry/${values.company}/${values.model}/${values.year}`);
  };

  return (
    <div className="filter">
      <div className="filter_head">Search your Spare Parts</div>
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
                <option value="" disabled>Select Car Company</option>
                <option value="audi">Audi</option>
                <option value="mercedez">Mercedez</option>
                <option value="rolls-royce">Rolls-Royce</option>
                <option value="toyota">Toyota</option>
              </Field>
            </div>
            <div className="filter_item">
              {/* <Field type="text" name="model" placeholder="Select Car Model" /> */}
              <Field as="select" name="model">
                <option value="" disabled>Select Car Model</option>
                <option value="a-class">A-Class</option>
                <option value="b-class">B-Class</option>
              </Field>
            </div>
            <div className="filter_item">
              {/* <Field type="text" name="year" placeholder="Select Year" /> */}
              <Field as="select" name="year">
                <option value="" disabled>Select Year</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
              </Field>
            </div>
            <div className="filter_btn">
              <Button
                width='100%'
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
