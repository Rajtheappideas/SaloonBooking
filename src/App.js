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
} from "./Pages/index";
const App = () => {
  return (
    <Fragment>
      <ScrollToTop />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms&conditions" element={<TermsAndCondition />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
