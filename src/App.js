import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import {
  Home,
  TermsAndCondition,
  Error404,
  PrivacyPolicy,
  ContactUs,
  AboutUs,
  FAQ,
  Signin,
  Signup,
  Resetpassword,
} from "./Pages/index";
const App = () => {
  return (
    <Fragment>
      <ScrollToTop />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/resetpassword" element={<Resetpassword />} />
          <Route path="/terms&conditions" element={<TermsAndCondition />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
