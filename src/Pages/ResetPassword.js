import React from "react";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import resetpassword from "../assets/resetpassword.jpg";
import logo from "../assets/logo.png";
import { useFormik, FormikProvider, Form } from "formik";
import * as yup from "yup";
import { MetaTags } from "react-meta-tags";

const ResetPassword = () => {
  // -----------------------------yup --------------------------
  const ResetpasswordSchema = yup.object().shape({
    email: yup.string().email().required("email is required!"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: ResetpasswordSchema,
    onSubmit: async (values) => {
      const user = {
        email: values.email,
      };
      console.log(user);
    },
  });
  const { handleSubmit, getFieldProps, errors, touched } = formik;
  return (
    <>
      <MetaTags>
        <title>Reset password</title>
      </MetaTags>
      <div className="sm:grid sm:grid-cols-2 sm:gap-4">
        <div className="flex sm:justify-between items-center  w-auto sm:h-screen rounded-md sm:pt-10">
          <div>
            <img
              src={resetpassword}
              alt="login logo"
              className="sm:block hidden h-full w-full mx-auto object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-start sm:my-10">
          <Link to="/">
            <img src={logo} alt="logo" className="block h-28 mb-2" />
          </Link>
          <div className="text-center md:w-72 w-auto">
            <p className="text-lg font-semibold my-3">Reset your password</p>
            <p className="text-base font-light ">
              We'll send you instructions to reset your password and get you
              back on track.
            </p>
          </div>
          <FormikProvider value={formik}>
            <Form onSubmit={handleSubmit} autoComplete="off">
              <div className="flex flex-col justify-center text-right items-center pt-10">
                <div className="my-2">
                  <div className="relative mb-1">
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      {...getFieldProps("email")}
                      name="email"
                      className={`opacity-70 bg-gray-300 outline-none py-2 pl-10 rounded-md md:w-72  w-auto ${
                        touched.email && errors.email
                          ? "border-2 border-red-400"
                          : null
                      }`}
                    />
                    <MdEmail
                      size={25}
                      className="absolute top-2 left-0 p-1 ml-2"
                      color="gray"
                    />
                  </div>
                </div>

                <div className="text-center mt-4 ">
                  <button
                    type="submit"
                    className="p-2 bg-black text-white sm:w-72 w-60 "
                  >
                    Email me
                  </button>
                </div>
                <div className="text-center mt-4">
                  <button className="p-2 bg-gray-200 text-black sm:w-72 w-60 ">
                    <Link to="/signin">Back to Login</Link>
                  </button>
                </div>
              </div>
            </Form>
          </FormikProvider>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
