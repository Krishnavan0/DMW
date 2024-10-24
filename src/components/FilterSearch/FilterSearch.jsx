import "./FilterSearch.css";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import Button from "../../components/Button/Button";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

const searchSearch = ({ closeModal }) => {
  const navigate = useNavigate();

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
    navigate(`/enquiry/${values.company}/${values.model}/${values.year}`);
  };

  return (
    <>
      <div className="modal_wrapper" onClick={closeModal} ></div>
      <div className="search_container">
        <div className="search">
          <div className="search_back">
            <RxCross1 size={32} onClick={closeModal} />
          </div>
          <div className="search_head">Search your Spare Parts</div>
          <Formik
            initialValues={defaultValue}
            validationSchema={validationSchema}
            onSubmit={submitForm}
          >
            <Form action="">
              <div className="search_items">
                <div className="search_item">
                  {/* <Field type="text" name="company" placeholder="Select Car Company" /> */}
                  <Field as="select" name="company">
                    <option disabled>Select Car Company</option>
                    <option value="audi">Audi</option>
                    <option value="mercedez">Mercedez</option>
                    <option value="rolls-royce">Rolls-Royce</option>
                    <option value="toyota">Toyota</option>
                  </Field>
                </div>
                <div className="search_item">
                  {/* <Field type="text" name="model" placeholder="Select Car Model" /> */}
                  <Field as="select" name="model">
                    <option disabled>Select Car Model</option>
                    <option value="beat">A-Class</option>
                    <option value="bclass">B-Class</option>
                  </Field>
                </div>
                <div className="search_item">
                  {/* <Field type="text" name="year" placeholder="Select Year" /> */}
                  <Field as="select" name="year">
                    <option disabled>Select Year</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                  </Field>
                </div>
                <div className="search_btn">
                  <Button
                    width='100%'
                    height='4.6rem'
                    type="submit"
                    text="Search"
                    fontFamily="Inter"
                    fontSize="1.5rem"
                    fontWeight="400"
                  // background='#D2378B'
                  />
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  )
};



export default searchSearch;
