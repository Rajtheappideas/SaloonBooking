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
  MyAccount,
  Bookings
} from "./Pages/index";
import { UserProvider } from "./context/user_context";
const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <ScrollToTop />
        <UserProvider>
          {/* <Navbar /> */}
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
            <Route path="/myaccount" element={<MyAccount />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
          {/* <Footer /> */}
        </UserProvider>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
