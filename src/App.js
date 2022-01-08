import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms&condition" element={<TermsAndCondition />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
