import React, { useState } from "react";
import { AiFillFacebook } from "react-icons/ai";
import { MdEmail, MdLock } from "react-icons/md";
import { Link } from "react-router-dom";
import styled from "styled-components";
import login from "../assets/login.jpg";
import logo from "../assets/logo.png";
import { useFormik, Form, FormikProvider, ErrorMessage } from "formik";
import * as yup from "yup";
import { RiEyeOffFill, RiEyeFill } from "react-icons/ri";
import { CircularProgress } from "@material-ui/core";
import GoogleLogin from "react-google-login";
import useUserdata from "../hooks/useUserdata";
import { MetaTags } from "react-meta-tags";
import { useUserContext } from "../context/user_context";
const Signin = () => {
  const [showPassword, setShowpassword] = useState(false);
  const { handleFailure, handleLogout, handleSuccess } = useUserdata();
  const { userData } = useUserContext();
  // -----------------------------------yup---------------------------------
  const SigninSchema = yup.object().shape({
    email: yup.string().required("email is required!").email(),
    password: yup
      .string()
      .required("password is required!")
      .min(8, "Password should be 8 chars minimum.")

      .matches(/[a-zA-Z0-9]/, "Password can only contain Latin letters."),
  });

  // --------------------------formik-------------
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: SigninSchema,
    onSubmit: async (values) => {
      const user = {
        email: values.email,
        password: values.password,
      };
      console.log(user);
      resetForm();
    },
  });
  const {
    errors,
    touched,
    resetForm,
    handleSubmit,
    isSubmitting,
    getFieldProps,
  } = formik;

  return (
    <>
      <MetaTags>
        <title>Sign in</title>
      </MetaTags>
      <div className="sm:grid sm:grid-cols-2 sm:gap-4">
        <div className="flex sm:justify-between items-center  w-auto sm:h-screen rounded-md sm:pt-10">
          {/* <Link to="/">
            <img src={logo} alt="logo" className="sm:block hidden sm:show h-28 mb-3" />
          </Link> */}
          <div>
            <img
              src={login}
              alt="login logo"
              className="sm:block hidden h-full w-full mx-auto object-cover rounded-lg"
            />
          </div>
        </div>
        {userData ? (
          <div className="text-center flex flex-col justify-center items-center text-4xl font-semibold">
            <Link to="/">
              <img src={logo} alt="logo" className="block h-28 mb-2" />
            </Link>
            <h1>You Already Logged in!</h1>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-start sm:my-10">
            <Link to="/">
              <img src={logo} alt="logo" className="block h-28 mb-2" />
            </Link>
            <div className="flex flex-col justify-center items-center pt-10">
              {/* <div className="mb-3 relative">
              <button className="text-left px-5">Login</button>
              <button className="text-right px-5">Create a Account</button>
              <Underline className="mt-2" />
            </div> */}
              <div className="relative">
                {userData ? (
                  <button
                    onClick={handleLogout}
                    className="w-72 p-2 bg-black text-white mb-2"
                  >
                    logout
                  </button>
                ) : (
                  <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                    onSuccess={handleSuccess}
                    onFailure={handleFailure}
                    cookiePolicy={"single_host_origin"}
                    className="w-72 mb-3 "
                  ></GoogleLogin>
                )}
                {/* <button className="p-2 items-center outline-none justify-center flex flex-row border w-72 mb-3">
                  <img
                    src="https://img.icons8.com/color/50/000000/google-logo.png"
                    alt="google icon"
                    className="mx-2 h-6"
                  />
                  Sign in with Google
                </button> */}
                <button className="p-2 sm:justify-start items-center justify-center text-white outline-none flex flex-row w-72 bg-blue-800">
                  <AiFillFacebook size={25} color="white" className="mx-2" />
                  Sign in with Facebook
                </button>
                <UnderlineLeft />
                <p className="text-center">or</p>
                <UnderlineRight />
              </div>
              <FormikProvider value={formik}>
                <Form autoComplete="off" onSubmit={handleSubmit}>
                  <div className="my-2 flex text-left items-center sm:items-start justify-center flex-col">
                    <div className="relative mb-3">
                      <input
                        type="email"
                        placeholder="Email"
                        required
                        {...getFieldProps("email")}
                        name="email"
                        className={`opacity-70 bg-gray-300 outline-none py-2 pl-10 rounded-md md:w-72  w-auto ${
                          touched.email && errors.email
                            ? "border-2 border-red-600"
                            : null
                        }`}
                      />
                      <MdEmail
                        size={25}
                        className="absolute top-2 left-0 p-1 ml-2"
                        color="gray"
                      />
                    </div>
                    <ErrorMessage name="email" />
                    <div className="relative">
                      <MdLock
                        size={25}
                        className="absolute top-2 left-0 p-1 ml-2"
                        color="gray"
                      />
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="password"
                        name="password"
                        {...getFieldProps("password")}
                        className={`opacity-70 bg-gray-300 outline-none py-2 pl-10 rounded-md md:w-72  w-auto ${
                          touched.password && errors.password
                            ? "border-2 border-red-600"
                            : null
                        }`}
                      />
                      <button onClick={() => setShowpassword((prev) => !prev)}>
                        {showPassword ? (
                          <RiEyeFill
                            size={25}
                            className="absolute top-2 right-0 p-1 mr-2"
                          />
                        ) : (
                          <RiEyeOffFill
                            size={25}
                            className="absolute top-2 right-0 p-1 mr-2"
                          />
                        )}
                      </button>
                    </div>
                    <ErrorMessage name="password" />
                  </div>
                  <div className="text-right">
                    <button className="hover:underline my-2">
                      <Link to="/resetpassword">Forgot Password ?</Link>
                    </button>
                  </div>
                  <div className="sm:w-72 w-60">
                    <p className="text-center">
                      By logging in you agree to our{" "}
                      <span className="underline font-semibold">
                        <Link to="/">Conditions of Use</Link>
                      </span>{" "}
                      and{" "}
                      <span className="underline font-semibold">
                        <Link to="/privacypolicy">Privacy Policy</Link>
                      </span>
                    </p>
                  </div>
                  <div className="text-center mt-4">
                    <button className="p-2 bg-black text-white sm:w-72 w-60 ">
                      {isSubmitting ? <CircularProgress /> : null}
                      Login
                    </button>
                    <p className="uppercase mt-3">
                      don't have an account ?{" "}
                      <span className="underline font-bold">
                        <Link to="/signup">sign up</Link>
                      </span>
                    </p>
                  </div>
                </Form>
              </FormikProvider>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Signin;

const UnderlineLeft = styled.p`
  ::after {
    content: "";
    position: absolute;
    bottom: 5px;
    left: 0%;
    background: gray;
    width: 45%;
    height: 1px;
  }
`;
const UnderlineRight = styled.p`
  ::after {
    content: "";
    position: absolute;
    bottom: 5px;
    right: 0%;
    background: gray;
    width: 45%;
    height: 1px;
  }
`;

const Underline = styled.p`
  ::after {
    content: "";
    position: absolute;
    bottom: 5px;
    left: 0%;
    width: 100%;
    height: 2px;
    background: gray;
  }
`;
