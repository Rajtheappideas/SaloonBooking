import React, { Fragment, useState } from "react";
import logo from "../assets/contactus.jpg";
import styled from "styled-components";
import { FaUserAlt } from "react-icons/fa";
// import ReCAPTCHA from "react-google-recaptcha";
import { MdEmail, MdMessage, MdPhone } from "react-icons/md";
import LazyLoad from "react-lazyload";
import { FormikProvider, Form, useFormik, ErrorMessage } from "formik";
import * as yup from "yup";
import { CircularProgress } from "@material-ui/core";
import { Footer, Navbar } from "../Components";
import { MetaTags } from "react-meta-tags";

const ContactUs = () => {
  // ---------------------------------yup-----------------------------------
  const ContactusSchema = yup.object().shape({
    name: yup
      .string()
      .required("name is required!")
      .min(3, "Too short!")
      .max(25, "Too long!"),
    email: yup.string().email().required("email is required!"),
    phone: yup.number().required("phone is required!"),
    message: yup
      .string()
      .required("message must be filled!")
      .min(5, "min 5 words required!")
      .max(250, "Limit reached!"),
  });

  // ----------------------------formik---------------------------
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: ContactusSchema,
    onSubmit: async (values) => {
      const user = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        message: values.message,
      };
      console.log(user);
      resetForm();
    },
  });

  const { getFieldProps, resetForm, handleSubmit, isSubmitting } = formik;
  return (
    <Fragment>
      <MetaTags>
        <title>Contact us</title>
      </MetaTags>
      <Navbar />
      <main>
        <div className="relative">
          <LazyLoad once>
            <img
              src={logo}
              alt="terms&confitionpic"
              className="w-full bg-auto  lg:h-80 md:h-60 sm:h-40  object-cover object-center  "
            />
          </LazyLoad>
          <p className="uppercase text-white sm:text-4xl text-3xl font-extrabold absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4  ">
            <span>contact us</span>
          </p>
        </div>
        <div className="p-20">
          <div className="text-center mb-8 ">
            <div className="font-semibold tracking-wider relative inline-block uppercase text-2xl">
              lets's get connnect
              <Underline className="mt-4 " />
            </div>
            <p className="block my-4">
              {" "}
              Join us online and start building your business today.{" "}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="shadow-2xl rounded-lg w-auto h-auto">
              <FormikProvider value={formik}>
                <Form onSubmit={handleSubmit}>
                  <div className="p-10 flex flex-col sm:items-start items-center justify-center ">
                    <div className="relative my-3">
                      <input
                        type="text"
                        placeholder="Name*"
                        name="name"
                        {...getFieldProps("name")}
                        className="opacity-50 bg-gray-300 outline-none py-2 pl-10 rounded-lg lg:w-96 md:w-72 w-auto"
                      />
                      <FaUserAlt
                        size={25}
                        className="absolute text-gray-300 top-2 left-0 p-1 ml-2"
                        color="gray"
                      />
                    </div>
                    <ErrorMessage name="name" className="text-red-400" />
                    <div className="relative mb-3">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email*"
                        {...getFieldProps("email")}
                        className="opacity-50 bg-gray-300 outline-none py-2 pl-10 rounded-lg lg:w-96 md:w-72 w-auto"
                      />
                      <MdEmail
                        size={25}
                        className="absolute text-gray-300 top-2 left-0 p-1 ml-2"
                        color="gray"
                      />
                    </div>
                    <ErrorMessage name="email" />
                    <div className="relative mb-3">
                      <input
                        type="number"
                        placeholder="Phone*"
                        {...getFieldProps("phone")}
                        className="opacity-50 bg-gray-300 outline-none py-2 pl-10 rounded-lg lg:w-96 md:w-72 w-auto"
                      />
                      <MdPhone
                        size={25}
                        className="absolute text-gray-300 top-2 left-0 p-1 ml-2"
                        color="gray"
                      />
                    </div>
                    <ErrorMessage name="phone" />
                    <div className="relative mb-1">
                      <textarea
                        type="text"
                        placeholder="Enter your message*"
                        name="message"
                        {...getFieldProps("message")}
                        cols="auto"
                        rows="5"
                        className="opacity-50 bg-gray-300 outline-none py-2 pl-10 rounded-lg lg:w-96 md:w-72 w-auto"
                      />
                      <MdMessage
                        size={25}
                        className="absolute text-gray-300 top-2 left-0 p-1 ml-2"
                        color="gray"
                      />
                    </div>
                    <ErrorMessage name="message" />
                  </div>
                  <div className="mb-3 text-center">
                    {/* <ReCAPTCHA
                      sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                      onChange={handleChange}
                    /> */}
                    <button
                      type="submit"
                      className="bg-black hover:bg-gradient-to-r from-green-500 to-green-200  rounded-md text-white uppercase font-semibold text-base p-2 w-52"
                    >
                      {isSubmitting ? <CircularProgress /> : null}
                      Submit
                    </button>
                  </div>
                </Form>
              </FormikProvider>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};

export default ContactUs;

const Underline = styled.p`
  ::after {
    content: "";
    height: 4px;
    width: 20%;
    background: #d53078;
    position: absolute;
    left: calc(45% - 10%);
    bottom: 0;
  }
`;
