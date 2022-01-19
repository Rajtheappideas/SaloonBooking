import React, { useEffect, useState } from "react";
import { AiFillFacebook, AiOutlineReload } from "react-icons/ai";
import { MdEmail, MdLock, MdPhone } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import signup from "../assets/signup.jpg";
import logo from "../assets/logo.png";
import { FormikProvider, ErrorMessage, Form, useFormik } from "formik";
import * as yup from "yup";
import { MetaTags } from "react-meta-tags";
import { RiEyeOffFill, RiEyeFill } from "react-icons/ri";
import GoogleLogin from "react-google-login";
import useUserdata from "../hooks/useUserdata";
import { useUserContext } from "../context/user_context";
const Signup = () => {
  const [generatedCaptcha, setGeneratedCaptcha] = useState("");
  const [showPassword, setshowPassword] = useState(false);
  const { handleFailure, handleLogout, handleSuccess } = useUserdata();
  const { userData } = useUserContext();
  // ==========================generate a captcha---------------------------------
  const characters = "abcdefghijklmnopqrstvwxyz1234567890";

  function generateString(length) {
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    setGeneratedCaptcha(result);
    return result;
  }

  //   -----------------------comapare captcha-------------

  useEffect(() => {
    window.onload = generateString(6);
  }, []);

  // -------------------------------yup---------------------------

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const SigninSchema = yup.object().shape({
    email: yup.string().required("email is required!").email(),
    username: yup
      .string()
      .required("username is required!")
      .min(3, "Too short!")
      .max(30, "Too long!"),
    phone: yup
      .string()
      .min(10, "At least 10 digit required!")
      .max(10, "At least 10 digit required!")
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Phone Number is Required!"),
    password: yup
      .string()
      .required("password is required!")
      .min(8, "Password should be 8 chars minimum.")
      .matches(/[a-zA-Z0-9]/, "Password can only contain Latin letters."),
    confirmpassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("confirm password is required!"),
    captcha: yup
      .string()
      .required("captcha is required!")
      .matches(generatedCaptcha, "captcha must be match!"),
  });
  // ------------------------formik----------------------------
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      phone: "",
      password: "",
      confirmpassword: "",
      captcha: "",
    },
    validationSchema: SigninSchema,
    onSubmit: async (values) => {
      const user = {
        email: values.email,
        username: values.username,
        phone: values.phone,
        password: values.password,
      };

      console.log("user -> ", user);
      generateString(6);
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
  console.log("formik ->", formik);
  return (
    <>
      <MetaTags>
        <title>Sign up</title>
      </MetaTags>
      <div className="sm:grid sm:grid-cols-2 sm:gap-4">
        <div className="flex sm:justify-between items-center  w-auto sm:h-screen rounded-md sm:pt-10">
          {/* <Link to="/">
            <img src={logo} alt="logo" className="sm:block hidden sm:show h-28 mb-3" />
          </Link> */}
          <div>
            <img
              src={signup}
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
          <div className="flex flex-col items-center justify-start sm:my-3">
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
                <button className="p-2 items-center justify-start text-white outline-none flex flex-row w-72 bg-blue-800">
                  <AiFillFacebook size={25} color="white" className="mx-2" />
                  Sign in with Google
                </button>
                <UnderlineLeft />
                <p className="text-center">or</p>
                <UnderlineRight />
              </div>
              <FormikProvider value={formik}>
                <Form autoComplete="off" onSubmit={handleSubmit}>
                  <div className="my-2 flex items-center sm:items-start justify-center flex-col">
                    <div className="relative mb-3">
                      <input
                        type="email"
                        name="email"
                        // required
                        placeholder="Email"
                        {...getFieldProps("email")}
                        className={`opacity-70  bg-gray-300 outline-none py-2 pl-10 rounded-md md:w-72 w-auto ${
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
                    <ErrorMessage name="email" className="text-left" />
                    <div className="relative mb-3">
                      <input
                        type="text"
                        name="username"
                        // required
                        placeholder="User Name"
                        {...getFieldProps("username")}
                        className={`opacity-70  bg-gray-300 outline-none py-2 pl-10 rounded-md md:w-72 w-auto ${
                          touched.username && errors.username
                            ? "border-2 border-red-400"
                            : null
                        }`}
                      />
                      <FaUserAlt
                        size={25}
                        className="absolute top-2 left-0 p-1 ml-2"
                        color="gray"
                      />
                    </div>
                    <ErrorMessage name="username" />
                    <div className="relative mb-3">
                      <input
                        type="number"
                        name="phone"
                        placeholder="Phone Number"
                        // required
                        {...getFieldProps("phone")}
                        className={`opacity-70  bg-gray-300 outline-none py-2 pl-10 rounded-md md:w-72 w-auto ${
                          touched.phone && errors.phone
                            ? "border-2 border-red-400"
                            : null
                        }`}
                      />
                      <MdPhone
                        size={25}
                        className="absolute top-2 left-0 p-1 ml-2"
                        color="gray"
                      />
                    </div>
                    <ErrorMessage name="phone" />
                    <div className="relative mb-3">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        // required
                        name="password"
                        {...getFieldProps("password")}
                        className={`opacity-70  bg-gray-300 outline-none py-2 pl-10 rounded-md md:w-72 w-auto ${
                          touched.password && errors.password
                            ? "border-2 border-red-400"
                            : null
                        }`}
                      />

                      <MdLock
                        size={25}
                        className="absolute top-2 left-0 p-1 ml-2"
                        color="gray"
                      />
                      <button
                        type="button"
                        onClick={() => setshowPassword((prev) => !prev)}
                      >
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
                    <div className="relative mb-3">
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        // required
                        className={`opacity-70  bg-gray-300 outline-none py-2 pl-10 rounded-md md:w-72 w-auto ${
                          touched.confirmpassword && errors.confirmpassword
                            ? "border-2 border-red-400"
                            : null
                        }`}
                        {...getFieldProps("confirmpassword")}
                        name="confirmpassword"
                      />
                      <MdLock
                        size={25}
                        className="absolute top-2 left-0 p-1 ml-2"
                        color="gray"
                      />
                    </div>
                    <ErrorMessage name="confirmpassword" />
                    <div className="relative mb-3 flex flex-col justify-center sm:items-start items-center">
                      <div>
                        <input
                          type="text"
                          value={generatedCaptcha}
                          disabled={true}
                          onChange={(e) => setGeneratedCaptcha(e.target.value)}
                          className="opacity-70 bg-gray-300 mr-2 text-center  text-green-800 mb-3 tracking-wider font-bold outline-none py-2  rounded-md sm:w-32  w-20"
                        />
                        <button type="button" onClick={() => generateString(6)}>
                          <AiOutlineReload size={30} />
                        </button>
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Enter captcha"
                          name="captcha"
                          {...getFieldProps("captcha")}
                          // required
                          // onChange={(e) => setEnterCaptcha(e.target.value)}
                          className={`opacity-70  bg-gray-300 outline-none py-2 pl-10 rounded-md md:w-72 w-auto ${
                            touched.captcha && errors.captcha
                              ? "border-2 border-red-400"
                              : null
                          }`}
                        />
                      </div>
                      <ErrorMessage name="captcha" />
                    </div>
                  </div>
                  <div className="sm:w-72 w-60">
                    <p className="text-center">
                      By creating and account you agree to our{" "}
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
                    <button
                      type="submit"
                      // onClick={() => compareCapthca()}
                      className="p-2 bg-black text-white sm:w-72 w-60"
                    >
                      {isSubmitting ? "Loading" : null}
                      Sign Up
                    </button>
                    <p className="uppercase mt-3">
                      Already have an account ?
                      <span className="underline font-bold">
                        <Link to="/signin">sign in</Link>
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

export default Signup;

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
